import './assets/base.css'
import { auth } from './includes/firebase'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())

    app.mount('#app')
  }
})
