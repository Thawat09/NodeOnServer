const express = require('express');
const router = express.Router();
const planJob = require('../../controllers/planJob/planJob.contoller');

router.get('/', planJob.getApiPlanJob);
router.get('/get-job-main', planJob.getJobMain);
router.get('/get-emp', planJob.getEmp);

module.exports = router;
