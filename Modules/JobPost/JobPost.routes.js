const express = require("express");
const router = express.Router();
const { ViewJobs, CreateJob, ViewPaginatedJobs, getJobById } = require("../JobPost/Controller/JobPost.controller");


router.get('/JobPosting', ViewJobs);

router.post('/JobPosting/:id', CreateJob);

router.get('/JobPosting/paginated', ViewPaginatedJobs);

router.get('/jobDetails/:id', getJobById);


module.exports = router;