"use strict";

var express = require('express');
var router = express.Router();
var example = require('../../controllers/example/example.contoller');
router.get('/', example.getApiExampleb);
router.get('/postgre-sql', example.examplePostgreSQL);
router.get('/server-sql', example.exampleServerSQL);
module.exports = router;