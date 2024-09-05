import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import useAuth from './auth/useAuth'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const { attempt } = useAuth();

const app = createApp(App)

app.use(router)

attempt().then(() => {
    app.mount('#app')
})
