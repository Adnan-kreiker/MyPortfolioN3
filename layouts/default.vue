<script setup lang="ts">
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})
</script>

<template>
  <div class="dark:bg-zinc-600 h-screen">
    <div class="navbar bg-base-100">
      <a class="btn btn-ghost normal-case text-xl">Home</a>
    </div>

    <button class="ml-auto absolute top-6 right-0 mr-2" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
      <input type="checkbox" class="toggle toggle-sm" checked>
    </button>
    <slot />
  </div>
</template>
