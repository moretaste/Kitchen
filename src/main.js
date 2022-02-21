import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(createPinia())
app.use(router)
app.mount('#app')
