<script setup lang="ts">
const categories = [
    {
        title: "Fuqorolik",
        description: "ID karta, Xorijga chiqish pasporti, Ijro hujjati, migratsiya",
        icon: ""
    },
    {
        title: "Ta'lim",
        description: "Maktabgacha ta'lim, Oliy va o'rta ta'lim, nostrifikatsiya",
        icon: ""
    },
    {
        title: "Oila va bolalar",
        description: "Oila tarkibi, nikoh, aliment",
        icon: ""
    },
    {
        title: "Yoshlar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus quasi Officia, necessitatibus",
        icon: ""
    },
    {
        title: "Adliya",
        description: "Fuqarolik holati dalolatnomalarini yozish organlari, Notarius",
        icon: ""
    },
    {
        title: "Ijtimoiy himoya",
        description: "Nafaqa tayinlash, Ipoteka kreditiga Davlat subsidiyasi",
        icon: ""
    },
    {
        title: "Madaniyat, turizm va sport",
        description: "Trener-o'qituvchi malaka toifasi, madaniy boylik",
        icon: ""
    },
    {
        title: "Ma'lumotnomalar",
        description: "Tug'ilganlik, nikoh ma'lumotnomalari, yashash joyi manzili",
        icon: ""
    },
    {
        title: "UJKX",
        description: "Muxandislik-kommunikatsiya tarmoqlariga ulanish",
        icon: ""
    },
]


</script>
<template>
    <div class="text-2xl text-main-500 font-medium">
        Sohalar
    </div>
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
        <div v-for="(category, i) in categories" :key="i"
            class='bg-white flex relative flex-col border-[3px] border-gray-100 hover:border-main-500 hover:shadow-main-200 transition-all  gap-1 shadow-lg shadow-[#eee] p-5 rounded-xl'>
            <div class='flex flex-col'>
                <h2 class='font-semibold mb-1 line-clamp-2  max-w-[80%]'>{{ category.title }}</h2>
                <div
                    class='w-12 h-12 absolute bottom-[15px] right-[15px] rounded-full bg-main-100 flex  justify-center items-center text-xl text-main-500'>

                </div>
            </div>
            <p class="text-sm line-clamp-2 max-w-[80%]">
               {{ category.description }}
            </p>
        </div>
        <div v-for="(category, i) in categories" :key="i"
            class='bg-white flex relative flex-col border-[3px] border-gray-100 hover:border-main-500 hover:shadow-main-200 transition-all  gap-1 shadow-lg shadow-[#eee] p-5 rounded-xl'>
            <div class='flex flex-col'>
                <h2 class='font-semibold mb-1 line-clamp-2  max-w-[80%]'>{{ category.title }}</h2>
                <div
                    class='w-12 h-12 absolute bottom-[15px] right-[15px] rounded-full bg-main-100 flex  justify-center items-center text-xl text-main-500'>

                </div>
            </div>
            <p class="text-sm line-clamp-2 max-w-[80%]">
               {{ category.description }}
            </p>
        </div>
    </div>
</template>
