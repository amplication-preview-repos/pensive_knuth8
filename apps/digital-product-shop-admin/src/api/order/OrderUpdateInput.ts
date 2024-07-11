import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
