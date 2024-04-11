const express = require('express');
const router = express.Router();
const planJob = require('../../controllers/planJob/planJob.contoller');

router.get('/', planJob.getApiPlanJob);

module.exports = router;
