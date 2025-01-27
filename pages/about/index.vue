<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <div>
    <div>
      <div class="flex items-center gap-5">
        <button
          @click="setLocale('en')"
          class="bg-main-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          en
        </button>
        <button
          @click="setLocale('fr')"
          class="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          fr
        </button>
      </div>
      <p>{{ $t("welcome") }}</p>
      <p>{{ $t("about") }}</p>
    </div>
  </div>
</template>
