import { CAFE_MENU, CafeMenuItem } from "~/server/utils/menu";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  console.log(query);
  const keys = Object.keys(query) as Array<keyof CafeMenuItem>;
  if (keys.length > 0) {
    const key = keys[0] as keyof CafeMenuItem;
    if (key === "name") {
      return CAFE_MENU.filter((menu) => menu.name.includes(String(query[key])));
    }
    return CAFE_MENU.filter((menu) => String(menu[key]) === query[key]);
  }
  return CAFE_MENU;
});
