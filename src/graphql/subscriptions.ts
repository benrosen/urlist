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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreateLink = /* GraphQL */ `
  subscription OnCreateLink {
    onCreateLink {
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
export const onUpdateLink = /* GraphQL */ `
  subscription OnUpdateLink {
    onUpdateLink {
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
export const onDeleteLink = /* GraphQL */ `
  subscription OnDeleteLink {
    onDeleteLink {
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
