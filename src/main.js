import Vue from "vue";
import App from "./App";
import router from "./route";
import "./utils/initial";

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
