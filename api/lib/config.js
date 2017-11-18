'use strict';

console.log('process.env.NODE_ENV',process.env.NODE_ENV);
if (!process.env.NODE_ENV) {
    console.log('setting to NODE_ENV=development');
    process.env.NODE_ENV = 'development';
}
var conf = require('../config/config-'+process.env.NODE_ENV);

module.exports = conf;