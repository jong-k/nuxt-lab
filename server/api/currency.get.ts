export default defineEventHandler((event) => {
  const query = getQuery(event);
  console.log(query);
  return getRandomCurrencyData(100);
});
