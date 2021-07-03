import { Form, Formik } from "formik";
import { render, screen } from "@testing-library/react";

import Field from "./index";
import React from "react";

describe("The Field component", () => {
  it("renders an element with a textbox role.", () => {
    render(
      <Formik initialValues={{ test: "" }} onSubmit={() => {}}>
        <Form>
          <Field
            as={(props) => {
              return <input />;
            }}
            id="test"
            label="test"
            onValidate={() => {}}
          />
        </Form>
      </Formik>
    );
    const fieldElement = screen.getByRole("textbox");
    expect(fieldElement).toBeInTheDocument();
  });
});
