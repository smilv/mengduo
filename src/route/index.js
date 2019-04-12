import Vue from "vue";
import Router from "vue-router";

const Home = () => import("../views/home");
const Tab = () => import("../views/tab");

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/tab",
            component: Tab
        }
    ]
});
