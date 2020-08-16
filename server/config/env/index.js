const _ = require('lodash');
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const config = require(`./${env}`);

const appConfig = {
    'appName':"Sample Auth Application"
}

module.exports = _.extend(appConfig, config);