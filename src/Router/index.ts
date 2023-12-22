import { createRouter, createWebHistory } from "vue-router";
import Results from "@/components/Result.vue";


const router = createRouter({
    history:createWebHistory(import.meta.url),
    routes:[
        {
            path: '/',
            component: Results
        }
    ],
});
