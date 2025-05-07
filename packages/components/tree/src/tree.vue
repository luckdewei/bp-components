<template>
  <div :class="bem.b()">
    <nz-tree-node 
      v-for="node in flattenTree" :key="node.key"
      :node="node"
      :is-expanded="isExpanded(node)"
    ></nz-tree-node>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TreeNode, TreeOption, TreeProps } from './tree'
import NzTreeNode from './tree-node.vue'
import { createNamespace } from '@nz-ui/utils/namespace'

defineOptions({
  name: 'nz-tree',
})

const bem = createNamespace('tree')

const props = defineProps(TreeProps)

const tree = ref<TreeNode[]>([])
// 对用户数据格式化 label key children
function createTree(data: TreeOption[]): TreeNode[] {
  function traversal(
    data: TreeOption[],
    parent?: TreeNode | undefined
  ): TreeNode[] {
    return data.map((node) => {
      const children = node.children ? node.children : []
      const treeNode: TreeNode = {
        key: (node[props.keyField] || node['key']) as string,
        label: (node[props.labelField] || node['label']) as string,
        children: [],
        level: parent ? parent.level + 1 : 0,
        parent: parent || undefined,
        isLeaf: children.length === 0,
        rawNode: node,
      }
      if (children.length) {
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }
  const result: TreeNode[] = traversal(data)
  return result
}
// 数据变化时重新构建树
watch(
  () => props.data,
  (val: TreeOption[]) => {
    tree.value = createTree(val)
  },
  {
    immediate: true,
  }
)

const expendedKeysSet = ref(new Set(props.defaultExpandedKeys))

// 将需要展开的节点找出
const flattenTree = computed(() => {
  const expandedKeys = expendedKeysSet.value
  const flattenNodes: TreeNode[] = []
  const nodes = tree.value || []
  const stack: TreeNode[] = []
  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i])
  }

  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    flattenNodes.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = children.length - 1; i >= 0; --i) {
          stack.push(node.children[i])
        }
      }
    }
  }
  return flattenNodes
})

console.log('flattenNodes', flattenTree.value)


function isExpanded(node: TreeNode): boolean {
  return expendedKeysSet.value.has(node.key)
}


</script>
