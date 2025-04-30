import DefaultTheme from 'vitepress/theme'
import QyIcon from '@qy-ui/components/icon'
import '@qy-ui/theme-chalk/src/index.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(QyIcon)
  }
}