<template>
  <div :class="themeStore.theme">
    <div
      class="w-full min-h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-white"
    >
      <Header />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "./stores/ThemeStore";

const themeStore = useThemeStore();
</script>

<style scoped></style>
