const apiPath = require("../api");

module.exports = Object.assign({ "process.env": { BUILD_TYPE: JSON.stringify(process.env.BUILD_TYPE) } }, apiPath[process.env.BUILD_TYPE]);
