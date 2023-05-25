import { createWebHistory, createRouter } from "vue-router";

import Main from "../pages/main/Main.vue";

const routes = [
    /* 메인화면 */
    { path: "/", name: "Main", component: Main },
];

const AppRouter = createRouter({
    history: createWebHistory(),
    routes,
});

// [
//     {name: "root", path:"/", component: Main},

// ]
export default AppRouter;
