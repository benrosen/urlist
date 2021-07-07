import { GRAPHQL_AUTH_MODE, GraphQLResult } from "@aws-amplify/api-graphql";
import { GetListQuery, List } from "API";

import { API } from "aws-amplify";
import { GetListByIdProps } from "./getListById.props";
import { getList } from "graphql/queries";

/**
 * The getListById function returns list data for a given list id.
 */
export const getListById = async ({
  id,
}: GetListByIdProps): Promise<List | null | undefined> => {
  try {
    const result = (await API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      query: getList,
      variables: { id: id },
    })) as GraphQLResult<GetListQuery>;
    return result.data?.getList;
  } catch (error) {
    console.log(error);
  }
};
