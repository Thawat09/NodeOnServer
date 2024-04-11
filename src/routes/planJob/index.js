const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('API Plan Job'));

module.exports = router;
