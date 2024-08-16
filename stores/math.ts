export const useMathStore = defineStore("math", {
  state: () => {
    return { luckyNumber: 77 };
  },
  actions: {
    async getRandomNumber() {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return Math.round(Math.random() * 100);
    },
  },
});
