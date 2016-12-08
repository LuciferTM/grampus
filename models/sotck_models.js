/**
 * Created by www on 2016/12/7.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var Stock = new Schema({
    code: {type: String},
    market: {type: String},
    name: {tyep: String},
    current: {type: Number},
    marketCapital: {type: Number},
    totalShares: {type: Number},
    pe_lyr: {type: Number},
    pe_ttm: {tyep: Number},
    quarterly_report: [QuarterlyReport],
    exchange: {type: String} //市场
});

//季度报表
var QuarterlyReport = new Schema({
    stock_id: {type: ObjectId},
    date: {type: Date},
    profit:{type: Number},
    revenue:{type: Number},
    net_estate:{type: Number}
});

QuarterlyReport.index({stock_id: 1});

var StockHistoryPrice = new Schema({
    stock_id: {type: ObjectId},
    date: {type:Date},
    //需要考虑除权
    high_price: {type:Number},
    low_price: {type:Number}
});

StockHistoryPrice.index({sotck_id: 1});



