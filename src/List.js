import React, { useCallback, useEffect, useState } from "react";
import ListGroup from "./components/ListGruop/ListGroup";
import useInfiniteScroll from "./hook/useInfiniteScroll";

const List = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(15).keys(), (n) => n + 1)
  );
  const [isFetching, setIsFetching] = useInfiniteScroll();

  const fetchMoreListItems = useCallback(() => {
    if (isFetching) {
      setTimeout(() => {
        setListItems((preState) => [
          ...preState,
          ...Array.from(Array(10).keys(), (n) => preState.length + n + 1)
        ]);
        setIsFetching(false);
      }, 1000);
    }
  }, [isFetching, setIsFetching]);

  useEffect(() => {
    fetchMoreListItems();
  }, [fetchMoreListItems]);

  return (
    <>
      <ListGroup listItems={listItems} />
      {isFetching && "Fetching more list items..."}
    </>
  );
};

export default List;
