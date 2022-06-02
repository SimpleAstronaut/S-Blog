const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'S-Blog后端接口', msg: 'Hello World!' });
});

module.exports = router;
