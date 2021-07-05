import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

/**
 * The useListId function parses the current URL for a list ID.
 *
 * @returns The list ID parsed from the current URL.
 */
export const useListId = (): string => {
  const location = useLocation();
  const [listId, setListId] = useState<string>("");
  useEffect(() => {
    setListId(() => {
      return location?.pathname?.substring(1) ?? "";
    });
  }, [location]);
  return listId;
};
