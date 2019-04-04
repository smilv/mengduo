const apiPath = require("../api");

module.exports = Object.assign(
    {},
    {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    apiPath[process.env.BUILD_TYPE]
);
