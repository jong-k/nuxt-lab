import { GetCurrencyParams, getFilteredCurrencyData } from "~/server/utils/currency";
import { DUMMY_CURRENCY_DATA } from "~/server/utils/dummy";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  console.log("query:", query);
  // const data = getRandomCurrencyData(100);
  const data = DUMMY_CURRENCY_DATA;

  return getFilteredCurrencyData(data, query as unknown as GetCurrencyParams);
});
