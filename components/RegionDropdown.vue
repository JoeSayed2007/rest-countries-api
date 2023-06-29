<template>
  <div className="relative">
    <button
      @click="toggleDropdown"
      class="w-[200px] h-14 mt-[50px] mb-[10px] lg:my-0 pl-6 pr-4 flex items-center justify-between relative bg-white dark:bg-dark-background-secondary rounded-md box-shadow"
    >
      <span>{{ regionDropdownValue }}</span>
      <img
        src="~/assets/icons/caret-down.svg"
        alt="caret-down"
        :class="{ invert: themeStore.theme }"
        class="w-6 h-6"
      />
    </button>

    <ul
      v-if="regionDropdownActive"
      class="w-[200px] space-y-2 py-4 absolute top-[60px] left-0 bg-white dark:bg-dark-background-secondary rounded-md box-shadow"
    >
      <li
        v-for="option in options"
        @click="setRegionDropdownValue(option)"
        class="px-6 cursor-pointer"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDataStore } from "~/stores/DataStore";
import { useThemeStore } from "~/stores/ThemeStore";

const dataStore = useDataStore();
const themeStore = useThemeStore();
const options = ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"];
const regionDropdownActive = ref(false);
const regionDropdownValue = ref("Filter by Region");
const toggleDropdown = () => {
  regionDropdownActive.value = !regionDropdownActive.value;
};
const setRegionDropdownValue = (value) => {
  regionDropdownValue.value = value;
  dataStore.regionDropdownValue = value;
  regionDropdownActive.value = false;
};
</script>

<style scoped></style>
