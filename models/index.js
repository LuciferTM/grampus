/**
 * Created by www on 2016/12/8.
 */
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db,{
        server:{poolSie:10}
    },function(err){
        if(err){
            console.log("connect to %s error", config.db,err.message);
            process.exit(1);
        }
});

//models
require('./stock_models');

exports.Stock = mongoose.model('Stock');
exports.StockHistoryPrice = mongoose.model('StockHistoryPrice');
exports.QuarterlyReport = mongoose.model('QuarterlyReport');