import { ComparisonCreateNestedManyWithoutProductsInput } from "./ComparisonCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: string | null;
  comparisons?: ComparisonCreateNestedManyWithoutProductsInput;
  description?: string | null;
  imageUrl?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  rating?: number | null;
};
