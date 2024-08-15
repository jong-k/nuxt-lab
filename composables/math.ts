export function useSum(x: number, y: number) {
  return x + y;
}

// 화살표 함수 사용 가능
export const useMultiply = (x: number, y: number) => {
  return x * y;
};

export function useMinus(x: number, y: number) {
  return x - y;
}

export function useMyNumber() {
  // util 호출 가능
  return MY_NUMBER;
}
