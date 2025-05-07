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
        <template v-if="isLoading">
          <component :is="Loading" />
        </template>
        <template v-else>
          <component :is="props.icon || Switcher" />
        </template>
      </nz-icon>
      <span :class="bem.be('node', 'label')">{{ node.label }}</span>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { createNamespace } from '@nz-ui/utils/namespace'
import { TreeNodeProps, TreeNodeEmits } from './tree'
import Switcher from './tree-icon/Switcher'
import { computed } from 'vue'
import Loading from './tree-icon/Loading'


defineOptions({
  name: 'nz-tree-node'
})

const bem = createNamespace('tree')

const props = defineProps(TreeNodeProps)

const emit = defineEmits(TreeNodeEmits)

const handleExpand = () => {
  emit('toggle', props.node)
}

const isLoading = computed(() => {
  return props.loadingKeys.has(props.node.key)
})
</script>