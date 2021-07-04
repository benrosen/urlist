import { PropsWithChildren } from "react";

export type FieldHarnessProps = PropsWithChildren<{
  initialValues: any;
  onSubmit: () => void;
}>;
