/**
 * Created by www on 2016/12/7.
 */

var tools = require('../util/tools');

module.exports = function (schema) {
    schema.methods.create_at_ago = function () {
        return tools.formatDate(this.create_at, true);
    };

    schema.methods.update_at_ago = function () {
        return tools.formatDate(this.update_at, true);
    };
};