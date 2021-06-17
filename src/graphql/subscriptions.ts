/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink {
    onCreateLink {
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
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink {
    onUpdateLink {
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
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink {
    onDeleteLink {
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
