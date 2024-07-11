import { User } from "../user/User";
import { Product } from "../product/Product";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  user?: User | null;
  product?: Product | null;
};
