const express = require("express");

const { humanCheck } = require("../middlewares/human-check.middleware");
const FormController = require("../controllers/form.controller");

const router = express.Router();

router.post("/send", humanCheck, FormController.sendEmail);

module.exports = router;
