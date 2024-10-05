import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ComparisonWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
};
