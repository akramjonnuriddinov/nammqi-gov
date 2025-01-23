<script setup lang="ts">
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
]
</script>

<template>
  <header class="border-b border-gray-200 h-[60px] p-2 flex items-center justify-end">
    <nav>
      <ul class="flex gap-5">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
