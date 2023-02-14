const express = require("express");

const FormController = require("../controllers/form.controller");

const router = express.Router();

router.post("/send", FormController.sendEmail);

module.exports = router;
