import { createRouter, createWebHistory } from "vue-router";
import ErrorPage from './page/errorContainer/ErrorPage.vue';
import NotFoundPage from './page/errorContainer/NotFoundPage.vue'
import HomePage from './page/HomePage.vue'





const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/:id?',component: HomePage,},
        { path : '/error', component: ErrorPage},
        { path : '/:notFound(.*)', component: NotFoundPage},
    ],
})
export default router