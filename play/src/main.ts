import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@nz-ui/components/icon'
import '@nz-ui/theme-chalk/src/index.scss'
import Tree from '@nz-ui/components/tree'
const plugins = [Icon, Tree]

const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
