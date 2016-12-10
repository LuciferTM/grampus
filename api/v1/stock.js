/**
 * Created by www on 2016/12/8.
 */
var models     = require('../../models');
var eventproxy = require('eventproxy');
var _          = require('lodash');
var StockModel = models.Stock;
var StockProxy = require('../../proxy').Stock;

var index = function (req, res, next) {
    var query = {};
    var ep = new eventproxy();
    ep.fail(next);
    StockModel.find(query,ep.done('stocks'));
    ep.all('stocks', function (stocks) {
        stocks = stocks.map(function (stock) {
           return _.pick(stock, ['code','market','name'])
        });
        res.send({success:true,data:stocks});
    });
};

var create = function (req, res, next) {
    var code = req.body.code;
    var market = req.body.market;
    var name = req.body.name;

    //验证
    var editError;
    if(code === '' || code == null || code == undefined){
        editError = '代码不能为空';
    } else if(market === '' || market == null || market == undefined){
        editError = '市场不能为空';
    } else if(name === '' || name == null || name == undefined){
        editError = '名称不能为空';
    }
    console.log("end yanzheng");
    //END 验证
    if(editError){
        res.status(400);
        return res.send({success:false, error_msg:editError});
    }

    StockProxy.newAndSave(code, market, name, function (err,stock) {
        if(err) {
            console.log(err);
            next(err);
        }
    });
    res.send({success:true})
};

exports.index=index;
exports.create=create;