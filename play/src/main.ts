import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@qy-ui/components/icon'
import '@qy-ui/theme-chalk/src/index.scss'

const plugins = [Icon]

const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
