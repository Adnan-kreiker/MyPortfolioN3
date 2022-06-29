<script setup lang="ts">
import { themeChange } from 'theme-change'


onMounted(() => {
  themeChange(false)
})
</script>

<template>
<div class="dark:bg-zinc-600 h-screen">
    <div class="navbar bg-base-100">
  <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
</div>
  <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Change</button>
  <slot />
</div>
</template>
