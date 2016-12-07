/**
 * Created by www on 2016/12/7.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Stock = new Schema({
    code: {type: String},
    name: {tyep: String},
    current: {type: Number},
    marketCapital: {type: Number},
    totalShares: {type:Number},
    pe_lyr:{type:Number},
    pe_ttm:{tyep:Number},
    exchange:{type:String}, //市场
});

