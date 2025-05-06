import _Tree from './src/tree.vue'
import { withInstall } from '@nz-ui/utils'

const Tree = withInstall(_Tree)

export default Tree

export * from './src/tree'

declare module 'vue' {
  export interface GlobalComponents {
    NzTree: typeof Tree
  }
}