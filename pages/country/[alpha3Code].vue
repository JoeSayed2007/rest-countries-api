<template>
  <Head>
    <Title>{{ country.name }}</Title>
  </Head>
  <div
    class="min-h-[calc(100vh-80px)] px-14 lg:px-20 lg:grid lg:grid-cols-2 lg:gap-20"
  >
    <div class="my-10 lg:my-0 flex items-center justify-center">
      <img :src="country.flags.png" :alt="country.name" class="w-full" />
    </div>
    <div
      class="pb-10 lg:pb-0 flex flex-grow lg:flex-grow-0 flex-col justify-between lg:justify-center"
    >
      <h1 class="mb-10 lg:mb-0 text-3xl font-bold">{{ country.name }}</h1>
      <div
        class="lg:mt-10 mb-10 lg:mb-20 space-y-8 lg:space-y-0 lg:flex lg:justify-between font-semibold"
      >
        <div class="space-y-2 lg:space-y-0">
          <h3>
            Native Name:
            <span class="dark:text-gray-300 font-light">
              {{ country.nativeName }}
            </span>
          </h3>
          <h3>
            Population:
            <span class="dark:text-gray-300 font-light">
              {{ country.population.toLocaleString("en-US") }}
            </span>
          </h3>
          <h3>
            Region:
            <span class="dark:text-gray-300 font-light">
              {{ country.region }}
            </span>
          </h3>
          <h3>
            Sub Region:
            <span class="dark:text-gray-300 font-light">
              {{ country.subregion }}
            </span>
          </h3>
          <h3>
            Capital:
            <span class="dark:text-gray-300 font-light">
              {{ country.capital }}
            </span>
          </h3>
        </div>
        <div class="space-y-2 lg:space-y-0">
          <h3>
            Top Level Domain:
            <span class="dark:text-gray-300 font-light">
              {{ country.topLevelDomain[0] }}
            </span>
          </h3>
          <h3>
            Currencies:
            <span class="dark:text-gray-300 font-light">
              {{ country.currencies.map((curr) => curr.name).join(", ") }}
            </span>
          </h3>
          <h3>
            Languages:
            <span class="dark:text-gray-300 font-light">
              {{ country.languages.map((lang) => lang.name).join(", ") }}
            </span>
          </h3>
        </div>
      </div>
      <div class="flex items-center flex-wrap">
        <h3 class="mt-2 mr-2">Border Countries:</h3>
        <NuxtLink
          v-for="alpha3Code in country.borders"
          :to="alpha3Code.toLowerCase()"
          class="mt-2 mr-2 px-4 py-2 flex items-center justify-center bg-white dark:bg-dark-background-secondary dark:text-gray-300 rounded box-shadow"
        >
          {{ getCountryByAlpha3Code(alpha3Code).name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "~/stores/DataStore";

const dataStore = useDataStore();
const { alpha3Code } = useRoute().params;
const country = dataStore.countries.find(
  (country) => country.alpha3Code.toLowerCase() === alpha3Code
);
const getCountryByAlpha3Code = (alpha3Code) => {
  return dataStore.countries.find(
    (country) => country.alpha3Code === alpha3Code
  );
};
</script>

<style scoped></style>
