const express = require("express");
const router = express.Router();
const { ViewJobs, CreateJob } = require("../JobPost/Controller/JobPost.controller");


router.get('/JobPosting', ViewJobs);

router.post('/JobPosting/:id', CreateJob);


module.exports = router;