import { defineStore } from "pinia";

export const useStringStore = defineStore("string", {
  state: () => {
    return { hello: "greeting" };
  },
});
