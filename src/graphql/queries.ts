/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      description
      id
      links {
        url
        title
      }
      title
      createdAt
      updatedAt
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        description
        id
        links {
          url
          title
        }
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
