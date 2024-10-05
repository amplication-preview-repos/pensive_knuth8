import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
