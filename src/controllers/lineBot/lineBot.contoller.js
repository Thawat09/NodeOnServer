const helperLine = require('../../helpers/line/lineBot.helper');
const helperReturn = require('../../helpers/return/returnData.helper');

function getApiLineBot(req, res) {
  res.send('API Line Bot');
}

async function handleWebhook(req, res) {
  try {
    const events = req.body.events;
    const replies = [];

    for (const event of events) {
      if (event.type === 'message' && event.message.type === 'text') {
        const userText = event.message.text;
        const locale = await helperLine.getLocaleFromUserId(userText);
        const replyText = await helperLine.getResponseFromNLP(locale, userText);

        replies.push({
          type: 'text',
          text: replyText,
        });
      }

      if (event.replyToken && replies.length > 0) {
        await helperLine.replyToLine(event.replyToken, replies);
      }
    }

    helperReturn.jsonResponse(res, {success: replies});
  } catch (error) {
    console.error('Error handling webhook:', error);
    helperLine.jsonResponse(
      res,
      {success: false, message: 'Internal server error'},
      500,
      'Internal server error'
    );
  }
}

module.exports = {getApiLineBot, handleWebhook};
