import { ComparisonUpdateManyWithoutProductsInput } from "./ComparisonUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  rating?: number | null;
  imageUrl?: string | null;
  comparisons?: ComparisonUpdateManyWithoutProductsInput;
  orders?: OrderUpdateManyWithoutProductsInput;
};
