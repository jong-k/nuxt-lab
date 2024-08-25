import type { CafeMenuItem } from "~/server/utils/menu";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const keys = Object.keys(query);
  if (keys.length > 0) {
    const key = keys[0] as keyof CafeMenuItem;
    return CAFE_MENU.filter((menu) => menu[key] === query[key]);
  }
  return CAFE_MENU;
});
