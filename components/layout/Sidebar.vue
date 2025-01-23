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
    <div class="max-w-[250px] flex flex-col gap-4 w-full p-2 border-e border-gray-200 bg-[#fafafa]">
        <div class="text-xl mt-3 px-2">NamMQi Gov</div>
        <nav>
            <ul class="flex flex-col">
                <NuxtLink v-for="(link, index) in links" :key="index" :to="link.path" class="hover:bg-gray-100 w-full py-1 px-2 rounded-md">
                    {{ link.name }}
                </NuxtLink>
            </ul>
        </nav>
    </div>
</template>