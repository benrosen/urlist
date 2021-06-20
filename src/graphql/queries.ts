/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      description
      id
      links {
        items {
          id
          listId
          url
          title
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      title
      createdAt
      updatedAt
      owner
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
          nextToken
        }
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLink = /* GraphQL */ `
  query GetLink($id: ID!) {
    getLink(id: $id) {
      id
      list {
        description
        id
        links {
          nextToken
        }
        title
        createdAt
        updatedAt
        owner
      }
      listId
      url
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLinks = /* GraphQL */ `
  query ListLinks(
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        list {
          description
          id
          title
          createdAt
          updatedAt
          owner
        }
        listId
        url
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const linksByListId = /* GraphQL */ `
  query LinksByListId(
    $listId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    linksByListId(
      listId: $listId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        list {
          description
          id
          title
          createdAt
          updatedAt
          owner
        }
        listId
        url
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
