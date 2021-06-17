/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
      description
      id
      links {
        items {
          description
          id
          listId
          title
          url
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
      description
      id
      links {
        items {
          description
          id
          listId
          title
          url
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
      description
      id
      links {
        items {
          description
          id
          listId
          title
          url
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
export const createLink = /* GraphQL */ `
  mutation CreateLink(
    $input: CreateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    createLink(input: $input, condition: $condition) {
      description
      id
      listId
      title
      url
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLink = /* GraphQL */ `
  mutation UpdateLink(
    $input: UpdateLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    updateLink(input: $input, condition: $condition) {
      description
      id
      listId
      title
      url
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLink = /* GraphQL */ `
  mutation DeleteLink(
    $input: DeleteLinkInput!
    $condition: ModelLinkConditionInput
  ) {
    deleteLink(input: $input, condition: $condition) {
      description
      id
      listId
      title
      url
      createdAt
      updatedAt
      owner
    }
  }
`;
