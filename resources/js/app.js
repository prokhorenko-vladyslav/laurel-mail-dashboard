import Vue from 'vue';
import router from "./plugins/router";
import store from "./plugins/store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.prototype.axios = axios.create({
    baseURL: process.env.API_URL,
    timeout: 1000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

const app = new Vue({
    router,
    store,
    vuetify
}).$mount('#app');
