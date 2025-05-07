<template>
  <div :class="[
    bem.b('node')
  ]">
    <div :class="bem.be('node', 'content')" :style="{ paddingLeft: `${node.level * 16}px` }">
      <nz-icon v-if="props.icon || Switcher" :class="[
          bem.be('node', 'expand-icon'),
          bem.is('leaf', node.isLeaf),
          { 'is-expanded': props.isExpanded }
        ]"
        @click="handleExpand"
      >
        <component :is="props.icon || Switcher" />
      </nz-icon>
      <span :class="bem.be('node', 'label')">{{ node.label }}</span>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { createNamespace } from '@nz-ui/utils/namespace'
import { TreeNodeProps, TreeNodeEmits } from './tree'
import Switcher from './tree-icon/Switcher'


defineOptions({
  name: 'nz-tree-node'
})

const bem = createNamespace('tree')

const props = defineProps(TreeNodeProps)

const emit = defineEmits(TreeNodeEmits)

const handleExpand = () => {
  emit('toggle', props.node)
}
</script>