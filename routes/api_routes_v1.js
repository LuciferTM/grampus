/**
 * Created by www on 2016/12/8.
 */


var express = require('express');
var router = express.Router();
var Stock = require('../api/v1/stock');
// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// 定义网站主页的路由
router.get('/', function(req, res) {
    res.send('Grampus home page');
});

// 定义 about 页面的路由
router.get('/about', function(req, res) {
    res.send('About Grampus');
});

router.get('/stocks', Stock.index);



module.exports = router;