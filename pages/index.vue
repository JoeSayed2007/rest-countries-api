<template>
  <Head>
    <Title>Where in the world?</Title>
  </Head>
  <div
    class="w-full my-[30px] lg:my-12 px-5 lg:px-20 lg:flex lg:items-center lg:justify-between"
  >
    <SearchInput />
    <RegionDropdown />
  </div>
  <div class="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-4 gap-20">
    <CountryCard
      v-for="country in dataStore.filteredCountries"
      :alpha3Code="country.alpha3Code"
      :flag="country.flags.png"
      :name="country.name"
      :population="country.population"
      :region="country.region"
      :capital="country.capital"
    />
  </div>
</template>

<script setup>
import { useDataStore } from "~/stores/DataStore";

const dataStore = useDataStore();
</script>

<style scoped></style>
