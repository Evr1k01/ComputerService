import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

import Main from "../views/Main.vue";
import Home from "../views/Home.vue"

const routes = [
    {
        path: '/',
        name: 'Main',
        component:Main
    },

    {
        path: '/home',
        name: 'Home',
        component:Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
