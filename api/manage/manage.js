/**
 * Created by www on 2016/12/10.
 */
/**
 * 使用superagent从雪球爬取股票基本信息数据
 * API：https://xueqiu.com/v4/stock/?code=
 *
 *
 *
 */
var superagent = require("superagent");
var init = function () {
    superagent.get("https://xueqiu.com/v4/stock/")
        .query({code:"SZ000651"})
        .end(function (err, res) {
            console.log(res)
        });
};
exports.init = init;