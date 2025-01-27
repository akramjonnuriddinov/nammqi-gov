<script setup lang="ts">
const { setLocale } = useI18n()
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

const changeLocale = (event: Event) => {
  const target = event.target as any
  setLocale(target.value)
}
</script>

<template>
  <header class="h-[100px] p-7 flex items-center justify-between">
    <div class="font-bold">
      {{ $t("title") }}
    </div>
    <div
      class="relative border border-main-500 rounded-md flex items-center px-[1px] w-[400px]"
    >
      <input
        class="py-2 px-3 border-transparent w-full"
        type="text"
        placeholder="Xizmatni izlsh"
      />
      <button class="bg-main-500 fill-white rounded-md px-3 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
          ></path>
        </svg>
      </button>
    </div>
    <nav>
      <div class="flex items-center gap-3">
        <div class="text-main-500 rounded-full p-2 border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex flex-col">
          <a
            class="font-bold text-main-500 whitespace-nowrap"
            href="tel:+998 71-000-00-00"
            >+998 71-000-00-00</a
          >
          <p class="text-sm">Ishon telefonlari</p>
        </div>
        <select
          @change="changeLocale"
          class="mr-6 bg-transparent outline-none dark:bg-primary-dark"
        >
          <option value="uz">UZ</option>
          <option value="en">EN</option>
          <option value="ru">РУ</option>
        </select>
      </div>
      <!-- <ul class="flex gap-5">
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul> -->
    </nav>
  </header>
</template>
