import "lib-flexible";

import Vue from "vue";
import App from "./App";
import router from "./route";

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
