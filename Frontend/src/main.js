import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use (vuetify)
app.mount('#app')

// Main JS file. Imports from Vue, Pinia, Vuetify, App.vue, router, and main.css. Creates the app, pinia, and mounts the app to the #app div.
