const express = require('express');
const router = express.Router();

// Controllers
const {
    contact
} = require('../controllers/contact');

router.post('/contactus', contact);

module.exports = router