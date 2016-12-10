/**
 * Created by www on 2016/12/10.
 */
var express = require('express');
var router  = express.Router();

var manage  = require('../api/manage/manage');


router.get('/init', manage.init);