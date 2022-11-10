import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "../views/MainPage.vue"

const routes = [{
        path: '/',
        name: 'main',
        component: MainPage
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'router-link-active'
})

export default router