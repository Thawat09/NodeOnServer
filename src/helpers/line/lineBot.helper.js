const axios = require('axios');
const langdetect = require('langdetect');
const env = require('../../configs/app');
const {NlpManager} = require('node-nlp');

const createNlpManager = locale => {
  const manager = new NlpManager({languages: [locale], forceNER: true});

  return manager;
};

const supportedLanguages = {
  en: createNlpManager('en'),
  th: createNlpManager('th'),
};

const addTrainingData = (locale, texts, category) => {
  const manager = supportedLanguages[locale];
  if (!manager) {
    console.error(`NlpManager for locale ${locale} is not initialized`);
    return;
  }

  texts.forEach(text => {
    try {
      manager.addDocument(locale, text, category);
    } catch (error) {
      console.error(`Error adding document for locale ${locale}:`, error);
    }
  });
};

const addAnswer = (locale, category, answers) => {
  const manager = supportedLanguages[locale];
  if (!manager) {
    console.error(`NlpManager for locale ${locale} is not initialized`);
    return;
  }

  answers.forEach(answer => {
    manager.addAnswer(locale, category, answer);
  });
};

addTrainingData('en', ['hello', 'hi', 'how are you'], 'greetings');
addAnswer('en', 'greetings', ['Hello!!!']);
addTrainingData('th', ['สวัสดี', 'หวัดดี'], 'greetings');
addAnswer('th', 'greetings', ['สวัสดี!!!']);

(async () => {
  for (const locale in supportedLanguages) {
    await supportedLanguages[locale].train();
  }
})();

const methods = {
  getResponseFromNLP: async (locale, message) => {
    console.log(locale);
    const manager = supportedLanguages[locale];
    if (!manager) return 'Sorry, I cannot respond right now.';

    const response = await manager.process(locale, message);
    return response.answer || 'Sorry, I cannot respond right now.';
  },

  replyToLine: async (replyToken, messages) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.line_token}`,
      },
    };

    try {
      await axios.post(
        'https://api.line.me/v2/bot/message/reply',
        {
          replyToken,
          messages,
        },
        config
      );
    } catch (error) {
      console.error(
        'Error replying to LINE:',
        error.response ? error.response.data : error.message
      );
    }
  },

  getLocaleFromUserId: async userText => {
    const detected = langdetect.detect(userText);
    return detected[0].lang || 'en';
  },
};

module.exports = methods;
