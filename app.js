var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');
const basicAuth = require('express-basic-auth');

var indexRouter = require('./routes/index');
var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');
var userRouter = require('./routes/user');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use(basicAuth({users: { 'admin': '1234' }}))
app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);

module.exports = app;
