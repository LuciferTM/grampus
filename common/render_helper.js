"use strict";
var config = require("../config");

/**
 * 获取静态文件uri
 * @param{String} filePath 路径
 */
exports.staticFile = function(filePath) {
    if(filePath.indexOf("http") === 0 || filePath.indexOf('//')===0){
        return filePath;
    } else {
        return config.site_static_host + filePath;
    }
};