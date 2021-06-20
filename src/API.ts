/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateListInput = {
  description?: string | null,
  id?: string | null,
  title?: string | null,
};

export type ModelListConditionInput = {
  description?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelListConditionInput | null > | null,
  or?: Array< ModelListConditionInput | null > | null,
  not?: ModelListConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type List = {
  __typename: "List",
  description?: string | null,
  id: string,
  links?: ModelLinkConnection | null,
  title?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelLinkConnection = {
  __typename: "ModelLinkConnection",
  items?:  Array<Link | null > | null,
  nextToken?: string | null,
};

export type Link = {
  __typename: "Link",
  id: string,
  list?: List | null,
  listId: string,
  url: string,
  title?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateListInput = {
  description?: string | null,
  id: string,
  title?: string | null,
};

export type DeleteListInput = {
  id: string,
};

export type CreateLinkInput = {
  id?: string | null,
  listId: string,
  url: string,
  title?: string | null,
};

export type ModelLinkConditionInput = {
  listId?: ModelIDInput | null,
  url?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelLinkConditionInput | null > | null,
  or?: Array< ModelLinkConditionInput | null > | null,
  not?: ModelLinkConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLinkInput = {
  id: string,
  listId?: string | null,
  url?: string | null,
  title?: string | null,
};

export type DeleteLinkInput = {
  id: string,
};

export type ModelListFilterInput = {
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelListFilterInput | null > | null,
  or?: Array< ModelListFilterInput | null > | null,
  not?: ModelListFilterInput | null,
};

export type ModelListConnection = {
  __typename: "ModelListConnection",
  items?:  Array<List | null > | null,
  nextToken?: string | null,
};

export type ModelLinkFilterInput = {
  id?: ModelIDInput | null,
  listId?: ModelIDInput | null,
  url?: ModelStringInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelLinkFilterInput | null > | null,
  or?: Array< ModelLinkFilterInput | null > | null,
  not?: ModelLinkFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateListMutationVariables = {
  input: UpdateListInput,
  condition?: ModelListConditionInput | null,
};

export type UpdateListMutation = {
  updateList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteListMutationVariables = {
  input: DeleteListInput,
  condition?: ModelListConditionInput | null,
};

export type DeleteListMutation = {
  deleteList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLinkMutationVariables = {
  input: CreateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type CreateLinkMutation = {
  createLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLinkMutationVariables = {
  input: UpdateLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type UpdateLinkMutation = {
  updateLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLinkMutationVariables = {
  input: DeleteLinkInput,
  condition?: ModelLinkConditionInput | null,
};

export type DeleteLinkMutation = {
  deleteLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetListQueryVariables = {
  id: string,
};

export type GetListQuery = {
  getList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListsQuery = {
  listLists?:  {
    __typename: "ModelListConnection",
    items?:  Array< {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLinkQueryVariables = {
  id: string,
};

export type GetLinkQuery = {
  getLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLinksQueryVariables = {
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLinksQuery = {
  listLinks?:  {
    __typename: "ModelLinkConnection",
    items?:  Array< {
      __typename: "Link",
      id: string,
      list?:  {
        __typename: "List",
        description?: string | null,
        id: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      listId: string,
      url: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LinksByListIdQueryVariables = {
  listId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LinksByListIdQuery = {
  linksByListId?:  {
    __typename: "ModelLinkConnection",
    items?:  Array< {
      __typename: "Link",
      id: string,
      list?:  {
        __typename: "List",
        description?: string | null,
        id: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      listId: string,
      url: string,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateListSubscription = {
  onCreateList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateListSubscription = {
  onUpdateList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteListSubscription = {
  onDeleteList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links?:  {
      __typename: "ModelLinkConnection",
      items?:  Array< {
        __typename: "Link",
        id: string,
        listId: string,
        url: string,
        title?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLinkSubscription = {
  onCreateLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLinkSubscription = {
  onUpdateLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLinkSubscription = {
  onDeleteLink?:  {
    __typename: "Link",
    id: string,
    list?:  {
      __typename: "List",
      description?: string | null,
      id: string,
      links?:  {
        __typename: "ModelLinkConnection",
        nextToken?: string | null,
      } | null,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    listId: string,
    url: string,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
