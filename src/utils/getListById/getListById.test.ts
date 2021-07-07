import Amplify, { Auth } from "aws-amplify";

import awsExports from "aws-exports";
import getListById from "./index";

Amplify.configure(awsExports);
Auth.currentCredentials();

describe("The getListById function", () => {
  it("returns list data for the given listId.", () => {
    const testListId = "c937c4bb-23fe-4777-9154-95a5f61b9817";
    return getListById({ id: testListId }).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
