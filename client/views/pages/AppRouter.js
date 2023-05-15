import { createWebHistory, createRouter } from "vue-router";

import Main from '../pages/main/Main.vue';
import Dashboard1 from '../pages/main/Dashboard1.vue';
import Dashboard2 from '../pages/main/Dashboard2.vue';

const routes = [
    /* 메인화면 */
    { path: '/', name: 'Main', component: Main},
    { path: '/Dashboard1.page', name: 'Dashboard1', component: Dashboard1},
    { path: '/Dashboard2.page', name: 'Dashboard2', component: Dashboard2},
];

const AppRouter = createRouter({
    history: createWebHistory(),
    routes, 
});


// [
//     {name: "root", path:"/", component: Main},
    
// ]
export default AppRouter;