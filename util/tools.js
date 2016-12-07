/**
 * Created by LuciferTM on 2016/12/7.
 */
var moment = require("moment");

moment.locale('zh-cn');

exports.formatDate = function (date, friendly) {
    date = moment(date);
    if(friendly){
        return date.fromNow();
    } else {
        return date.format('YYYY-MM-DD HH:mm');
    }
};


