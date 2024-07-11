import { Product } from "../product/Product";

export type Comparison = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  product?: Product | null;
};
