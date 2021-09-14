import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Installation BootstrapVue
Vue.use(BootstrapVue)

// Optionnel - Installation du plugin des icones BootstrapVue
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')