import { defineStore } from "pinia";
import data from "~/data.json";

export const useDataStore = defineStore("data", () => {
  const countries = data;
  const filteredCountries = ref(countries);
  const searchInputValue = ref("");
  watch(searchInputValue, () => {
    filterCountries();
  });
  const regionDropdownValue = ref("");
  watch(regionDropdownValue, () => {
    filterCountries();
  });
  const filterCountries = () => {
    if (
      regionDropdownValue.value !== "" &&
      regionDropdownValue.value !== "All"
    ) {
      let arr = countries;
      filteredCountries.value = arr
        .filter((country) => country.region === regionDropdownValue.value)
        .filter((country) =>
          country.name
            .toLowerCase()
            .includes(searchInputValue.value.toLowerCase())
        );
    } else {
      let arr = countries;
      filteredCountries.value = arr.filter((country) =>
        country.name
          .toLowerCase()
          .includes(searchInputValue.value.toLowerCase())
      );
    }
  };

  return {
    countries,
    filteredCountries,
    searchInputValue,
    regionDropdownValue,
    filterCountries,
  };
});
