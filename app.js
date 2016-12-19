var config        = require('./config');
var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var _             = require('lodash');
var Loader        = require('loader');
var index         = require('./routes/index');
var users         = require('./routes/users');
var apiRouterV1   = require('./routes/api_routes_v1');

var app = express();

// assets
// var assets = {};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// use ejs as view engine
app.set('view engine', 'ejs');
// use ejs-mate as view engine
// app.set('view engine', 'html');
// app.engine('html', require('ejs-mate'));
// app.locals._layoutFile = 'layout.html';

// set static, dynamic helpers
_.extend(app.locals,{
  config: config,
  loder: Loader
  // assert: assert
});

_.extend(app.locals, require('./common/render_helper'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// routes
app.use('/api/v1', apiRouterV1);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
