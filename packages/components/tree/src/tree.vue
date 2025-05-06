<template>
    tree
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { TreeNode, TreeOption, TreeProps } from './tree'
defineOptions({
    name: 'nz-tree'
})

const props = defineProps(TreeProps)

// 对用户数据格式化 label key children
const tree = ref<TreeNode[]>([])


function createTree(data: TreeOption[]) : TreeNode[] {
    function traversal(data: TreeOption[], parent?: TreeNode | undefined): TreeNode[] {
        return data.map(node => {
            const children = node.children ? node.children : []
            const treeNode: TreeNode = {
                key: (node[props.keyField] || node['key']) as string,
                label: (node[props.labelField] || node['label']) as string,
                children: [],
                level: parent ? parent.level + 1 : 0,
                parent: parent || undefined,
                isLeaf: children.length === 0,
                rawNode: node
            }
            if (children.length > 0) {
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
        immediate: true
    }
)


</script>