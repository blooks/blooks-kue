'use strict';

var kue = require('kue');
var config = require('coyno-config');

kue.jobs = kue.createQueue({
  prefix: config.kue.prefix,
  redis: config.redis
});

kue.jobs.on('error', console.error);

module.exports = kue;
