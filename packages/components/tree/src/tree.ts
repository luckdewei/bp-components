import { ExtractPropTypes, PropType, Component } from 'vue'

export type Key = string | number

export interface TreeNode extends Required<TreeOption> {
    level: number,
    children: TreeNode[],
    isLeaf: boolean,
    parent: TreeNode | undefined,
    rawNode: TreeOption // 原始节点数据
}

export interface TreeOption {
    label?: string,
    key?: Key,
    children?: TreeOption[],
    [key: string]: unknown
}

const TreeProps = {
    data: {
        type: Array as PropType<TreeOption[]>,
        default: () => []
    },
    defaultExpandedKeys: { // 默认展开的节点
        type: Array as PropType<Key[]>,
        default: () => []
    },
    labelField: {
        type: String,
        default: 'label'
    },
    keyField: {
        type: String,
        default: 'key'
    }
} as const

export type TreeProps = Partial< ExtractPropTypes<typeof TreeProps>>

export const TreeNodeProps = {
    node: {
        type: Object as PropType<TreeNode>,
        required: true
    },
    icon: {
        type: String || [Object, Function] as PropType<Component>,
        default: ''
    },
    isExpanded: {
        type: Boolean,
        default: false
    }
} as const

export const TreeNodeEmits = {
    toggle: (node: TreeNode) => node
}

export { TreeProps }