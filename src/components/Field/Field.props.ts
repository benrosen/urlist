import { ElementType } from "react";

export type FieldProps = {
  /**
   * The type of element to appear and behave as.
   */
  as: ElementType<any>;
  /**
   * Details on how to understand and make use of this field.
   */
  helperText?: string;
  /**
   * A unique identifier for this field.
   */
  id: string;
  /**
   * Is the user required to complete this field?
   */
  isRequired?: boolean;
  /**
   * A label for this field.
   */
  label: string;
  /**
   * A callback function that validates the value of this field.
   */
  onValidate: (value: any) => any;
};
