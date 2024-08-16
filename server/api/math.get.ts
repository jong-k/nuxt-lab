import { useMathStore } from "~/stores/math";

export default defineEventHandler(async (event) => {
  const mathStore = useMathStore();
  console.log(event.path);
  const randomNumber = mathStore.luckyNumber;
  console.log(randomNumber);
});
