<template>
  <nz-icon size="20" color="blue">
    <Accessibility />
  </nz-icon>
  <nz-icon rotate="20deg" :component="HomeOutline" />

  <nz-tree :data="data" :default-expanded-keys="['40', '41']" />
</template>

<script lang="ts" setup>
import type { TreeOption } from '@nz-ui/components/tree'
import { Accessibility, HomeOutline } from '@vicons/ionicons5'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, index: number) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key),
    }
  })
}

function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}

const data = ref(createData() as TreeOption[])

console.log(data.value)
</script>

