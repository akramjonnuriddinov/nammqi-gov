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
  <header class="bg-gray-500 text-white">
    <nav>
      <ul class="flex gap-5">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
