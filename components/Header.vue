<template>
  <header
    class="w-full h-20 px-5 lg:px-20 flex items-center justify-between sticky top-0 left-0 bg-white dark:bg-dark-background-secondary box-shadow z-10"
  >
    <NuxtLink to="/" class="text-base lg:text-2xl font-bold"
      >Where in the world?</NuxtLink
    >
    <button @click="themeStore.toggleTheme" class="space-x-2 flex items-center">
      <img
        v-if="themeStore.theme"
        src="~/assets/icons/moon-icon-filled.svg"
        alt="moon-icon"
        class="w-4 invert"
      />
      <img
        v-else
        src="~/assets/icons/moon-icon-outlined.svg"
        alt="moon-icon"
        class="w-4"
      />
      <span>Dark Mode</span>
    </button>
  </header>
</template>

<script setup>
import { useThemeStore } from "~/stores/ThemeStore";

const themeStore = useThemeStore();
</script>

<style scoped></style>
