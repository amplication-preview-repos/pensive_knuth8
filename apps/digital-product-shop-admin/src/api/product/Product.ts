import { Comparison } from "../comparison/Comparison";
import { Order } from "../order/Order";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  category: string | null;
  rating: number | null;
  imageUrl: string | null;
  comparisons?: Array<Comparison>;
  orders?: Array<Order>;
};
