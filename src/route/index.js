import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Tab from "../views/tab.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/tab",
            name: "tab",
            component: Tab
        }
    ]
});
