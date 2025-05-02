<template>
    <i :class="bem.b()" :style="style">
        <template v-if="props.component">
            <component :is="props.component" />
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </i>
</template>

<script setup lang="ts">

import { createNamespace } from '@nz-ui/utils/namespace'
import { IconProps } from './icon'
import { computed } from 'vue'

defineOptions({ // vue3.3.x 语法糖，定义组件名称
    name: 'nz-icon',
})

const bem = createNamespace('icon')

const props = defineProps(IconProps)

const style = computed(() => {
    if (!props.size && !props.color && !props.rotate) return {}
    return {
        ...props.size ? { 'font-size': props.size + 'px' } : {},
        ...props.color ? { 'color': props.color } : {},
        ...props.rotate ? { transform: `rotate(${props.rotate})` } : {}
    }
})

</script>