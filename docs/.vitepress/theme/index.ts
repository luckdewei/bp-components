import DefaultTheme from 'vitepress/theme'
import nzIcon from '@nz-ui/components/icon'
import '@nz-ui/theme-chalk/src/index.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(nzIcon)
  }
}