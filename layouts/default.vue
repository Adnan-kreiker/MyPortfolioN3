<script setup lang="ts">
import { themeChange } from 'theme-change'

onMounted(() => {
  themeChange(false)
})

const navs = [
  {
    name: 'Home',
    path: '/',
    hash: ''
  },
  {
    name: 'Projects',
    path: '/projects',
    hash: 'projects'
  },
  {
    name: 'About',
    path: '/about',
    hash: 'about'
  },
  {
    name: 'Contact',
    path: '/contact',
    hash: 'contact'
  }
]
</script>

<template>
  <div class="dark:bg-zinc-600 h-screen">
    <div class="navbar bg-base-100">
      <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.path" class="btn btn-ghost normal-case text-xl">
        {{ nav.name }}
      </NuxtLink>
    </div>

    <button class="ml-auto absolute top-6 right-0 mr-2" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
      <input type="checkbox" class="toggle" checked>
    </button>
    <slot />
  </div>
</template>
