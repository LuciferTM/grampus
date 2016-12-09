/**
 * Created by www on 2016/12/8.
 */
var models     = require('../../models');
var eventproxy = require('eventproxy');
var _          = require('lodash');
var StockModel = models.Stock;

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

exports.index=index;