import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import AppHome from '../src/components/AppHome.vue'
import NewResident from '../src/components/NewResident.vue'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './includes/firebase'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: AppHome },
    { path: '/newresident', name: 'NewResident', component: NewResident }
  ]
})

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)

    app.use(router)

    app.use(createPinia())

    app.mount('#app')
  }
})
