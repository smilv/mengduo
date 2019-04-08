const apiPath = require("../api");

module.exports = Object.assign({}, apiPath[process.env.BUILD_TYPE]);
