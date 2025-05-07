<template>
  <div :class="[
    bem.b('node')
  ]">
    <div :class="bem.be('node', 'content')">
      <nz-icon
        v-if="props.icon || Switcher"
        :class="[bem.be('node', 'expand-icon'), bem.is('leaf', node.isLeaf), {'is-expanded': props.isExpanded}]"
      >
        <component :is="props.icon || Switcher" />
      </nz-icon>
      <span :class="bem.be('node', 'label')">{{ node.label }}</span>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { createNamespace } from '@nz-ui/utils/namespace'
import { TreeNodeProps } from './tree'
import Switcher from './tree-icon/switcher'

defineOptions({
  name: 'nz-tree-node'
})

const bem = createNamespace('tree')

const props = defineProps(TreeNodeProps)
</script>