import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ComparisonTitle } from "../comparison/ComparisonTitle";
import { OrderTitle } from "../order/OrderTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <ReferenceArrayInput source="comparisons" reference="Comparison">
          <SelectArrayInput
            optionText={ComparisonTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="orders" reference="Order">
          <SelectArrayInput
            optionText={OrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <NumberInput label="rating" source="rating" />
      </SimpleForm>
    </Create>
  );
};
