<template>
  <div
    className="w-full lg:w-[480px] h-14 space-x-4 px-8 flex items-center bg-white dark:bg-dark-background-secondary rounded-md box-shadow"
  >
    <img
      src="~/assets/icons/search-icon.svg"
      alt="search-icon"
      :class="[{ invert: themeStore.theme }, { icon: !themeStore.theme }]"
      class="w-[18px] h-[18px]"
    />
    <input
      @input=""
      v-model="dataStore.searchInputValue"
      type="search"
      placeholder="Search for a country..."
      class="h-full flex-1 bg-transparent placeholder:text-light-text-secondary dark:placeholder:text-gray-300 focus:outline-none"
    />
  </div>
</template>

<script setup>
import { useDataStore } from "~/stores/DataStore";
import { useThemeStore } from "~/stores/ThemeStore";

const dataStore = useDataStore();
const themeStore = useThemeStore();
</script>

<style scoped>
.icon {
  filter: invert(59%) sepia(1%) saturate(0%) hue-rotate(276deg) brightness(88%)
    contrast(95%);
}
</style>
