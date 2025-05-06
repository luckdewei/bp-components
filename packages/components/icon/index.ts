import _Icon from './src/icon.vue'
import { withInstall } from '@nz-ui/utils'

const Icon = withInstall(_Icon)

export default Icon

export * from './src/icon'

declare module 'vue' {
  export interface GlobalComponents {
    NzIcon: typeof Icon
  }
}