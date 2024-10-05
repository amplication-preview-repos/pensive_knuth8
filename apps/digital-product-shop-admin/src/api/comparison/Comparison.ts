import { Product } from "../product/Product";

export type Comparison = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  updatedAt: Date;
};
