import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import tarifs from '../components/tarifs.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/tarifs',
        name: 'Tarifs',
        component: tarifs
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router