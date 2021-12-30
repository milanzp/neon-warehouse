import { Product } from "./product.model";

export interface ProductDialogData {
  title: string;
  product?: Product;
  existingCodes?: string[];
}
