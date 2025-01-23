<template>
    <div ref="dropdownRef" class="relative">
      <button @click="toggleDropdown" class="flex items-center justify-between">
        <span v-if="typeof title === 'string'">{{ title }}</span>
        <slot v-else name="title"></slot>
      </button>
  
      <div
        v-if="isOpen"
        :class="`absolute mb-2 flex flex-col z-30 bg-white border border-gray-200 rounded-md shadow-lg transform transition-all top-full w-max duration-200 ${className}`"
      >
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted, onBeforeUnmount, watch } from "vue";
  import { useRoute } from "#app"; // Nuxt 3'ning useRoute API'si
  
  export default defineComponent({
    name: "Dropdown",
    props: {
      title: {
        type: [String, Object] as PropType<string>,
        required: true,
      },
      className: {
        type: String,
        default: "",
      },
    },
    setup(props) {
      const isOpen = ref(false);
      const dropdownRef = ref<HTMLDivElement | null>(null);
      const route = useRoute();
  
      const toggleDropdown = (): void => {
        isOpen.value = !isOpen.value;
      };
  
      const closeDropdown = (e: MouseEvent): void => {
        if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
          isOpen.value = false;
        }
      };
  
      onMounted(() => {
        document.addEventListener("mousedown", closeDropdown);
      });
  
      onBeforeUnmount(() => {
        document.removeEventListener("mousedown", closeDropdown);
      });
  
      watch(
        () => route.path,
        () => {
          isOpen.value = false;
        }
      );
  
      return {
        isOpen,
        toggleDropdown,
        dropdownRef,
      };
    },
  });
  </script>
  
  <style scoped></style>
  