const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { execFileSync } = require('child_process');
const exStatic = require("express-static");

const indexRouter = require('./routes/index'); //主页面路由
const loginRouter = require('./routes/login'); //登录接口路由
const uploadRouter = require('./routes/upload'); //上传文章接口路由
const getlistRouter = require('./routes/getlist'); //获取文章列表路由
const getRouter = require('./routes/get'); //获取文章详细路由

//const usersRouter = require('./routes/users');

var app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Main Router
app.use(indexRouter);
app.use(loginRouter);
app.use(uploadRouter);
app.use(getlistRouter);
app.use(getRouter);

//public
app.use(exStatic('./public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;