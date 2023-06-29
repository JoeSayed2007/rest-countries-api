import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    return {
      theme: "dark",
    };
  },
  actions: {
    toggleTheme() {
      if (this.theme === "dark") {
        this.theme = "";
      } else {
        this.theme = "dark";
      }
    },
  },
  persist: true,
});
