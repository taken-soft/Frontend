import { createWebHistory, createRouter } from "vue-router";

import Main from "../pages/main/Main.vue";
import Dashboard2 from "./main/Dashboard1.vue"

const routes = [
    /* 메인화면 */
    { path: "/", name: "Main", component: Main },
    { path: "/2.page", name: "Dashboard2", component: Dashboard2 },
];

const AppRouter = createRouter({
    history: createWebHistory(),
    routes,
});

// [
//     {name: "root", path:"/", component: Main},

// ]
export default AppRouter;
