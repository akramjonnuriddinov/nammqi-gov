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
    <div class="max-w-[270px] flex flex-col gap-4 w-full p-3 border-e border-gray-200 bg-main-500">
        <div class="text-2xl font-bold mt-3 px-2 text-white">NamMQi Gov</div>
        <nav>
            <ul class="flex flex-col gap-1">
                <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path"
                    class="hover:bg-main-400 hover:rounded-md text-white w-full py-2 border-b border-main-100/40 px-2">
                    {{ link.name }}
                </NuxtLink>
            </ul>
        </nav>
    </div>
</template>