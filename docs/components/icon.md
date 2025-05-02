# Icon 图标

nz-ui 推荐使用 xicons 作为图标库，你可以在 [xicons](https://www.xicons.org/) 找到所有可用图标。

```bash
$ pnpm install @vicons/ionicons5
```

## 使用图标

<nz-icon :component="HomeOutline" />
<nz-icon >
    <Accessibility/>
</nz-icon>

<script setup lang="ts">
import { HomeOutline, Accessibility } from '@vicons/ionicons5'
</script>

```vue
<template>
  <nz-icon :component="HomeOutline" />
  <nz-icon>
    <Accessibility />
  </nz-icon>
</template>

<script setup lang="ts">
import { HomeOutline, Accessibility } from '@vicons/ionicons5'
</script>
```

## 图标大小

你可以通过 `size` prop 来控制图标的尺寸。

<nz-icon size="20">
    <Accessibility/>
</nz-icon>


```html
<nz-icon size="20">
    <Accessibility />
</nz-icon>
```

## 图标颜色

你可以通过 `color` prop 来设置图标的颜色。

<nz-icon color="#f00">
    <Accessibility/>
</nz-icon>

```html
<nz-icon color="#f00">
    <Accessibility/>
</nz-icon>
```

## 图标旋转

你可以通过 `rotate` prop 来设置图标的旋转角度。

<nz-icon rotate="90deg">
    <Accessibility/>
</nz-icon>

```html
<nz-icon rotate="90deg">
    <Accessibility/>
</nz-icon>
```