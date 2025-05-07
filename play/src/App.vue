<template>
  <nz-icon size="20" color="blue">
    <Accessibility />
  </nz-icon>
  <nz-icon rotate="20deg" :component="HomeOutline" />

  <nz-tree
    :data="data" 
    :default-expanded-keys="['40', '41']"
    :on-load="handleLoad"
  />
</template>

<script lang="ts" setup>
import type { TreeOption } from '@nz-ui/components/tree'
import { Accessibility, HomeOutline } from '@vicons/ionicons5'
import { ref } from 'vue'



// function createData(level = 4, baseKey = ''): TreeOption[] {
//   if (!level) return []
//   const arr = new Array(6 - level).fill(0)
//   return arr.map((_, index: number) => {
//     const key = `${baseKey}${level}${index}`
//     return {
//       label: createLabel(level),
//       key,
//       children: createData(level - 1, key),
//     }
//   })
// }

// function createLabel(level: number): string {
//   if (level === 4) return '道生一'
//   if (level === 3) return '一生二'
//   if (level === 2) return '二生三'
//   if (level === 1) return '三生万物'
//   return ''
// }

function handleLoad(node: TreeOption) {
  return new Promise<TreeOption[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ])
    }, 1000)
  })
}

function createData() {
  return [
    {
      label: nextLabel(),
      key: 1,
      isLeaf: false
    },
    {
      label: nextLabel(),
      key: 2,
      isLeaf: false
    }
  ]
}

function nextLabel(currentLabel?: string): string {
  if (!currentLabel)
    return 'Out of Tao, One is born'
  if (currentLabel === 'Out of Tao, One is born')
    return 'Out of One, Two'
  if (currentLabel === 'Out of One, Two')
    return 'Out of Two, Three'
  if (currentLabel === 'Out of Two, Three') {
    return 'Out of Three, the created universe'
  }
  if (currentLabel === 'Out of Three, the created universe') {
    return 'Out of Tao, One is born'
  }
  return ''
}

const data = ref(createData() as TreeOption[])

console.log(data.value)
</script>

