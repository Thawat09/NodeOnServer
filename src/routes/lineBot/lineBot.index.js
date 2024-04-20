const express = require('express');
const router = express.Router();
const lineBot = require('../../controllers/lineBot/lineBot.contoller');

router.get('/', lineBot.getApiLineBot);
router.post('/message', lineBot.handleWebhook);

module.exports = router;
