import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './includes/firebase'

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())

    app.mount('#app')
  }
})
