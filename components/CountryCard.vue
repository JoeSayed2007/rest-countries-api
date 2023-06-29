<template>
  <NuxtLink
    :to="`country/${alpha3Code.toLowerCase()}`"
    class="w-full bg-white dark:bg-dark-background-secondary rounded-md box-shadow overflow-hidden"
  >
    <img :src="flag" :alt="name" class="w-full h-[198px] lg:h-[160px]" />
    <div class="p-6">
      <h2 class="pt-1.5 text-xl font-bold">{{ name }}</h2>
      <div class="py-4 text-sm font-semibold">
        <h3>
          Population:
          <span class="dark:text-gray-300 font-light">
            {{ population.toLocaleString("en-US") }}
          </span>
        </h3>
        <h3>
          Region:
          <span class="dark:text-gray-300 font-light">{{ region }}</span>
        </h3>
        <h3>
          Capital:
          <span class="dark:text-gray-300 font-light">{{ capital }}</span>
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  alpha3Code: String,
  flag: String,
  name: String,
  population: Number,
  region: String,
  capital: String,
});
</script>

<style scoped></style>
