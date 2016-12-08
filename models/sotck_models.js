/**
 * Created by www on 2016/12/7.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Stock = new Schema({
    code: {type: String},
    market: {type: String},
    name: {tyep: String},
    current: {type: Number},
    marketCapital: {type: Number},
    totalShares: {type: Number},
    pe_lyr: {type: Number},
    pe_ttm: {tyep: Number},
    exchange: {type: String} //市场
});

var StockHistoryPrice = new Schema({
    code: {type:String},
    date: {type:Date},
    //需要考虑除权
    high_price: {type:Number},
    low_price: {type:Number}
});

