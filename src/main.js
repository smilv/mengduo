// bin 2019/04/08
import Vue from "vue";
import App from "./App";
import router from "./route";

import "lib-flexible";
import "./assets/css/common.css";
import "./utils/filters";
import "./utils/initial";

//只在开发环境引入Mock
// process.env.NODE_ENV === "development" && require("./mock");

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
