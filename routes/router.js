const express = require('express');
const AddUser = require('../controllers/expense');
const router = express.Router();

router.post('/signup', AddUser); 

module.exports = router;
