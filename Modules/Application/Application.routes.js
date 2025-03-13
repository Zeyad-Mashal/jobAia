const express = require("express");
const router = express.Router();
const path = require("path");

const { ViewApplication, CreateApplication } = require("./Controller/Application.controller");



router.get('/application', ViewApplication);

router.post('/application', CreateApplication);


module.exports = router;