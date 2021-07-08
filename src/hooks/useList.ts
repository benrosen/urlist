import { useEffect, useState } from "react";

const DEFAULT_LIST = {
  id: "home",
  title: "Hello",
  description:
    "This is the default page. Below, you'll find a list of links. You can click the links to explore further.",
  links: [
    {
      id: "random",
      title: "Visit a random list.",
      url: "/random",
    },
    {
      id: "create",
      title: "Create ur own list.",
      url: "/create",
    },
    { id: "no", title: "No.", url: "/tutorial" },
  ],
};

const useList = (listId: string) => {
  const [list, setList] = useState<{
    id: string;
    title: string;
    description: string;
    links: { id: string; url: string }[];
  }>(DEFAULT_LIST);

  useEffect(() => {
    if (!listId) {
      setList(DEFAULT_LIST);
    }
    // TODO get list by id from api
    // TODO custom resolver for getList listId==="random" return random list
    // TODO create empty lists with ids "random" and "create"
  }, [listId]);

  return list;
};

export { useList };
