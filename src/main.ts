import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { applyTranslations } from './locales'

applyTranslations()
createApp(App).mount('#app')
