import { GetCurrencyParams, getFilteredCurrencyData } from "~/server/utils/currency";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  console.log("query:", query);
  const data = getRandomCurrencyData(100);

  return getFilteredCurrencyData(data, query as unknown as GetCurrencyParams);
});
