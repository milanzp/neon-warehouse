export interface Product {
  code: string,
  quantity: number,
  floor: number,
  section: number,
}

export interface ProductFilter {
  code: string,
  floor: number[],
  section: number[],
}