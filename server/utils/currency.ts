import { faker, Currency } from "@faker-js/faker";

export interface GetCurrencyParams {
  take?: number | undefined;
  cursor?: string | undefined;
}

export const getRandomCurrencyData = (size: number) => {
  return faker.helpers
    .uniqueArray(faker.finance.currency, size)
    .sort((a, b) => (a.name < b.name ? -1 : 1));
};

export const getFilteredCurrencyData = (data: Currency[], query: GetCurrencyParams) => {
  let result;
  const { take, cursor } = query;

  if (cursor) {
    const cursorIdx = data.findIndex((currency) => currency.name === cursor);
    if (cursorIdx === -1) {
      return [];
    }
    result = data.slice(cursorIdx);
  }

  if (take) {
    result = data.slice(0, take);
  }

  return result;
};
