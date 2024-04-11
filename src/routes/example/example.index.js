const express = require('express');
const router = express.Router();
const example = require('../../controllers/example/example.contoller');

router.get('/', example.getApiExampleb);
router.get('/postgre-sql', example.examplePostgreSQL);
router.get('/server-sql', example.exampleServerSQL);

module.exports = router;
