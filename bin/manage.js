/**
 * 使用superagent从雪球爬取股票基本信息数据
 * API：https://xueqiu.com/v4/stock/?code=
 */
var superagent = require("superagent");
var models     = require("../models/index");
var Stock      = models.Stock;

var market = "SZ300";
code_index = 1;
for (code_index = 1; code_index < 600; code_index ++){
    if (code_index < 100){
        if (code_index < 10){
            market_temp = market + "00"
        } else {
            market_temp = market + "0"
        }
    } else{
        market_temp = market;
    }
    code_temp = market_temp + code_index;

    superagent.get("http://xueqiu.com/v4/stock/quote.json")
        .set("Cookie", "webp=0; bid=6b9bc245dbc572d045e62733d93aa954_ir4v9yzn; " +
            "s=801kiyyr2f; xq_a_token=3b639312a44c89f74b919eb79bddf95099e116df; " +
            "xqat=3b639312a44c89f74b919eb79bddf95099e116df; xq_r_token=cd2117aa89e99d6010efba2919c8e2403c8237ef; " +
            "xq_is_login=1; u=5398755816; xq_token_expire=Thu%20Jan%2005%202017%2018%3A38%3A19%20GMT%2B0800%20(CST); " +
            "snbim_minify=true; __utmt=1; Hm_lvt_1db88642e346389874251b5a1eded6e3=1481546654,1481595930,1481597502,1481615102; " +
            "Hm_lpvt_1db88642e346389874251b5a1eded6e3=1481615112; __utma=1.1179963521.1468469551.1481595930.1481615106.381; __utmb=1.2.10.1481615106; " +
            "__utmc=1; __utmz=1.1481595930.380.8.utmcsr=baidu|utmccn=")
        .query({code:code_temp})
        .end(function (err, res) {
            if (err) {
                console.log("err!")
            }
            var obj = JSON.parse(res.text);
            if (Object.keys(obj).length == 1){
                obj = obj[Object.keys(obj)[0]];
                console.log(obj);
                var stock = new Stock({code:obj.code, name:obj.name, market:obj.exchange, totalShares:Number(obj.totalShares), marketShares:Number(obj.float_shares)});
                stock.save();
            }
        });
}