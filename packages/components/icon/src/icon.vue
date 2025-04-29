<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">

import { createNamespace } from '@qy-ui/utils/namespace'
import { IconProps } from './icon'
import { computed } from 'vue'

defineOptions({ // vue3.3.x 语法糖，定义组件名称
    name: 'qy-icon',
})

const bem = createNamespace('icon')

const props = defineProps(IconProps)

const style = computed(() => {
    if (!props.size && !props.color) return {}
    return {
        ...props.size ? {'font-size': props.size+'px'} : {},
        ...props.color ? {'color': props.color} : {},
    }
})

</script>