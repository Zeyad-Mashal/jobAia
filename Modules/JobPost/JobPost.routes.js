const express = require("express");
const router = express.Router();
const { ViewJobs, CreateJob, ViewPaginatedJobs } = require("../JobPost/Controller/JobPost.controller");


router.get('/JobPosting', ViewJobs);

router.post('/JobPosting/:id', CreateJob);

router.get('/JobPosting/paginated', ViewPaginatedJobs);


module.exports = router;