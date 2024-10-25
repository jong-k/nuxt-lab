import { faker } from "@faker-js/faker";

export const getRandomCurrencyData = (size: number) => {
  return faker.helpers
    .uniqueArray(faker.finance.currency, size)
    .sort((a, b) => (a.name < b.name ? -1 : 1));
};
