import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
