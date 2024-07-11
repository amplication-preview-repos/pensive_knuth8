import { ComparisonCreateNestedManyWithoutProductsInput } from "./ComparisonCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  rating?: number | null;
  imageUrl?: string | null;
  comparisons?: ComparisonCreateNestedManyWithoutProductsInput;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
