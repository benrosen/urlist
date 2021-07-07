import { useEffect, useState } from "react";

import { List } from "API";
import { UseListByIdProps } from "./useListById.props";
import defaultList from "./useListById.default.json";
import getListById from "utils/getListById";

const DEFAULT_LIST: List = defaultList as List;

/**
 * The useListById hook returns the list associated with a given list id. If the given id cannot be associated with an existing list, a default list will be returned instead.
 */
export const useListById = ({ id }: UseListByIdProps) => {
  const [list, setList] = useState<List>(DEFAULT_LIST);
  useEffect(() => {
    getListById({ id })
      .then((response) => {
        setList(response ?? DEFAULT_LIST);
      })
      .catch((error) => {
        console.error(error);
        setList(DEFAULT_LIST);
      });
  }, [id]);
  return list;
};
