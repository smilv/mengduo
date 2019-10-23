import Vue from "vue";
import Router from "vue-router";

const Example = () => import("../views/example");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Example
        }
    ]
});
