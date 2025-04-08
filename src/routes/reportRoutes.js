const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/reportController");

router.get("/report/csv", reportController.exportWizardCSV);
router.get("/report/pdf", reportController.exportWizardPDF);

module.exports = router;