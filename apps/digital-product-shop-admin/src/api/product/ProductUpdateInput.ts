import { ComparisonUpdateManyWithoutProductsInput } from "./ComparisonUpdateManyWithoutProductsInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  comparisons?: ComparisonUpdateManyWithoutProductsInput;
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  rating?: number | null;
};
