import { createRouter, createWebHashHistory } from "vue-router";
import viewHome from "../views/viewHome.vue";
import viewDashboard from "../views/viewDashboard.vue";
import viewLogin from "../views/auth/viewLogin.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: viewHome
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: viewDashboard
    },
    {
        path: "/login",
        name: "Login",
        component: viewLogin
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;