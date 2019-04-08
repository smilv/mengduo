import Vue from "vue";
import App from "./App";
import router from "./route";
import "./utils/filters";
import "./utils/initial";

//只在开发环境引入Mock
process.env.NODE_ENV === "development" && require("./mock");

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
