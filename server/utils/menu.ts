let id = 1;

export interface CafeMenuItem {
  id: string;
  name: string;
  price: number;
}

export const CAFE_MENU: CafeMenuItem[] = [
  {
    id: String(id++),
    name: "아이스 아메리카노",
    price: 3000,
  },
  {
    id: String(id++),
    name: "아이스 카페라떼",
    price: 3500,
  },
  {
    id: String(id++),
    name: "복숭아 아이스티",
    price: 3000,
  },
];
