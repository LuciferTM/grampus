/**
 * Created by www on 2016/12/9.
 */
var models   = require('../models');

var Stock = models.Stock;

/**
 *创建并保存一只股票的基本信息
 * @param{String} code 代码
 * @param{String} market 所处市场
 * @param{String} name 名称
 * @param{Function} callback 回调函数
*/

exports.newAndSave = function (code, market, name, callback) {
    var stock = new Stock();
    stock.code = code;
    stock.market = market;
    stock.name = name;
    stock.save(function (err) {
        callback(err, stock);
    });
    console.log("save success")
};