import { Comparison } from "../comparison/Comparison";
import { Order } from "../order/Order";

export type Product = {
  category: string | null;
  comparisons?: Array<Comparison>;
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  rating: number | null;
  updatedAt: Date;
};
