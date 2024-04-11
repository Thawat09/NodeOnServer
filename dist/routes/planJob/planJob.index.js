"use strict";

var express = require('express');
var router = express.Router();
var planJob = require('../../controllers/planJob/planJob.contoller');
router.get('/', planJob.getApiPlanJob);
module.exports = router;