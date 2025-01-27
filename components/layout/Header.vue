<script setup lang="ts">
const { setLocale } = useI18n()

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
        <IconsSearch />
    <div class="font-bold">Institutning interaktiv <br> xizmatlar portali</div>
    <div class="relative border border-main-500 rounded-xl flex items-center px-[1px] w-[400px]">
      <input class="py-2 px-3 border-transparent w-full" type="text" placeholder="Xizmatni izlsh">
      <button class="bg-main-500 fill-white rounded-xl px-3 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
          </path>
        </svg>
      </button>
    </div>
    <nav>
      <div class="flex items-center gap-3">
        <div class="text-main-500 rounded-full p-2 border-2">
          <IconsPhone />
        </div>
        <div class="flex flex-col">
          <a
            class="font-bold text-main-500 whitespace-nowrap"
            href="tel:+998 71-000-00-00"
            >+998 71-000-00-00</a
          >
          <span class="text-sm block">Ishon telefonlari</span>
        </div>
        <select @change="changeLocale">
          <option value="uz">UZ</option>
          <option value="en">EN</option>
          <option value="ru">РУ</option>
        </select>
      </div>
    </nav>
  </header>
</template>
