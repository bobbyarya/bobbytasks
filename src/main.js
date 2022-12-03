import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css'
import router from './router'


createApp(App).use(router).mount('#app')
