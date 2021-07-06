/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateListInput = {
  description?: string | null,
  id?: string | null,
  links: Array< LinkInput >,
  title?: string | null,
};

export type LinkInput = {
  url: string,
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
  links:  Array<Link >,
  title?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Link = {
  __typename: "Link",
  url: string,
  title?: string | null,
};

export type UpdateListInput = {
  description?: string | null,
  id: string,
  links?: Array< LinkInput > | null,
  title?: string | null,
};

export type DeleteListInput = {
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

export type ModelListConnection = {
  __typename: "ModelListConnection",
  items?:  Array<List | null > | null,
  nextToken?: string | null,
};

export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList?:  {
    __typename: "List",
    description?: string | null,
    id: string,
    links:  Array< {
      __typename: "Link",
      url: string,
      title?: string | null,
    } >,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
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
    links:  Array< {
      __typename: "Link",
      url: string,
      title?: string | null,
    } >,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
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
    links:  Array< {
      __typename: "Link",
      url: string,
      title?: string | null,
    } >,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
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
    links:  Array< {
      __typename: "Link",
      url: string,
      title?: string | null,
    } >,
    title?: string | null,
    createdAt: string,
    updatedAt: string,
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
      links:  Array< {
        __typename: "Link",
        url: string,
        title?: string | null,
      } >,
      title?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
