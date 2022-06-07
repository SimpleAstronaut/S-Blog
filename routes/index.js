const express = require('express');
const router = express.Router();
const axios = require('axios');
const {response} = require("express");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname+'/public'+'/index.html');
});

/* GET paget */
router.get('/page', function(req, res){
  if(req.query === null){
    res.sendFile(__dirname+'/public'+'/index.html');
  } else {
    const page = req.query.page;
    axios.get('http://127.00.1:9000/pages/get?page='+page).then(response =>{
      const status = response.data.status;
      if(status === 300){
        res.render('index', { title: '404 NOT FOUND', msg: '未查找到页面' });
      } else {
        res.sendFile(__dirname+'/public'+'/page.html');
      }
    })
  }
})

module.exports = router;
