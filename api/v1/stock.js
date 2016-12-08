/**
 * Created by www on 2016/12/8.
 */
var models     = require('../../models');
var StockModel = models.Stock;

var index = function (req, res, next) {
    var query = {};
    res.send({statu:200, message:"success!"});
};

exports.index=index;