const express = require('express');
const router = express.Router();
//const {response} = require("express");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'/public'+'/index.html');
});

module.exports = router;
