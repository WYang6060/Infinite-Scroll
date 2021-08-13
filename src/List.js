import { useCallback, useEffect, useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import useInfiniteGroup from "./hook/useInfiniteScroll";

const List = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(15).keys(), (n) => n + 1)
  );

  const [isFetching, setIsFetcing] = useInfiniteGroup();

  const fetchMoreListItems = useCallback(() => {
    if (isFetching) {
      setTimeout(() => {
        setListItems((prevState) => [
          ...prevState,
          ...Array.from(Array(10).keys(), (n) => prevState.length + n + 1)
        ]);
        setIsFetcing(false);
      }, 1000);
    }
  }, [isFetching, setIsFetcing]);

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
