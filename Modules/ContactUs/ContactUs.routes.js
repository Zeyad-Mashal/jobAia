
const express = require('express')
const router = express.Router()
const ContactUsController = require("./Controller/ContactUs.Controller")

router.post('/ContactUs', ContactUsController.creatContact)

router.get('/ContactUs', ContactUsController.getAllContacts)

module.exports = router;
