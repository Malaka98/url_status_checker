const express = require('express');

router = express.Router();

check = require('../controllers/check');


router.get('/check', check.check);

module.exports = router;