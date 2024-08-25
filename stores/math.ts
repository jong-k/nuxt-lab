import { defineStore } from "pinia";

export const useMathStore = defineStore("math", {
  state: () => {
    return { luckyNumber: Math.round(Math.random() * 100) };
  },
  actions: {
    async getRandomNumber() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Math.round(Math.random() * 100);
    },
  },
  persist: true,
});
