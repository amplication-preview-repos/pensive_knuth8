import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ComparisonListRelationFilter } from "../comparison/ComparisonListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  category?: StringNullableFilter;
  rating?: FloatNullableFilter;
  imageUrl?: StringNullableFilter;
  comparisons?: ComparisonListRelationFilter;
  orders?: OrderListRelationFilter;
};
