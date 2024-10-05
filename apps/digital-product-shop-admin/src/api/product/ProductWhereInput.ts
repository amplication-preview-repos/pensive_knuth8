import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ComparisonListRelationFilter } from "../comparison/ComparisonListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  category?: StringNullableFilter;
  comparisons?: ComparisonListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  rating?: FloatNullableFilter;
};
