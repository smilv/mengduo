import Vue from "vue";

import path from "../../api/index";

const pathEnv = path[process.env.BUILD_TYPE];

Object.keys(pathEnv).map(v => {
    let pathKey = v.replace(/^_/, "");
    Vue.prototype[pathKey] = JSON.parse(pathEnv[v]);
});
