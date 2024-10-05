import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
