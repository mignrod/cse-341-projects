const express = require('express');

const professionalController = require('../controller/professional');

const router = express.Router();

router.get('/', professionalController.getData);

module.exports = router;