import { UseListIdHarness } from "./useListId.harness";
import { renderHook } from "@testing-library/react-hooks";
import useListId from "./index";

describe("The useListId hook", () => {
  it("returns a list id parsed from the current URL.", () => {
    [
      ["/", ""],
      ["/test", "test"],
      ["/test/test", "test/test"],
    ].forEach(([location, listId]) => {
      const { result } = renderHook(() => useListId(), {
        initialProps: { location: location },
        wrapper: UseListIdHarness,
      });
      expect(result.current).toBe(listId);
    });
  });
});
