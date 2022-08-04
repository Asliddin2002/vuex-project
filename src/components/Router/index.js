import Home from "@/components/Home";
import Conter from "@/components/Conter";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:'/counter',
        name:"Counter",
        component:Conter
    },
]

const router = createRouter({
    history: createWebHistory(),routes})

export default router