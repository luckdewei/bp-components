import { ExtractPropTypes, PropType } from 'vue'

export type Key = string | number

export interface TreeNode extends Required<TreeOption> {
    level: number,
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

export { TreeProps }