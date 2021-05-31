const basicConfig = require('./basicConfig');
const paths = require('./paths');
const schemas = require('./schemas');
const servers = require('./servers');
const tags = require('./tags');

module.exports = {
    ...basicConfig,
    ...servers,
    ...schemas,
    ...tags,
    ...paths
}