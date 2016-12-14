/**
 * Created by www on 2016/12/7.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;


//季度报表
var QuarterlyReportSchema = new Schema({
    stock_id: {type: ObjectId},
    date: {type: Date},
    profit:{type: Number},
    revenue:{type: Number},
    net_estate:{type: Number}
});

QuarterlyReportSchema.index({stock_id: 1});

var StockSchema = new Schema({
    code: {type: String},
    market: {type: String},
    name: {type: String},
    current_price: {type: Number},
    marketCapital: {type: Number},
    marketShares: {type: Number},
    totalShares: {type: Number},
    pe_lyr: {type: Number},
    pe_ttm: {tyep: Number},
    quarterly_report: [QuarterlyReportSchema]
});


var StockHistoryPriceSchema = new Schema({
    stock_id: {type: ObjectId},
    date: {type:Date},
    //需要考虑除权
    high_price: {type:Number},
    low_price: {type:Number}
});

StockHistoryPriceSchema.index({sotck_id: 1});


mongoose.model('Stock', StockSchema);
mongoose.model('QuarterlyReport', QuarterlyReportSchema);
mongoose.model('StockHistoryPrice', StockHistoryPriceSchema);


