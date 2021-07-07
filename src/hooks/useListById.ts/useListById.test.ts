import Amplify, { Auth } from "aws-amplify";

import awsExports from "aws-exports";
import { renderHook } from "@testing-library/react-hooks";
import { useListById } from "./useListById";

/** @todo address error that prints after this test passes: GraphQLError: Cannot read property URL of undefined. */
Amplify.configure(awsExports);
Auth.currentCredentials();

describe("The useListById hook", () => {
  it("returns list data for a given list id.", () => {
    const testListId = "c937c4bb-23fe-4777-9154-95a5f61b9817";
    const { result } = renderHook(() => useListById({ id: testListId }));
    expect(result.current).toBeDefined();
  });
});
