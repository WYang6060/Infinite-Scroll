import { useCallback, useEffect, useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup";
import useInfiniteScroll from "./hook/useInfiniteScroll";

import ContentLoader from "react-content-loader";

const ThreeDots = () => (
  <ContentLoader
    viewBox="0 0 400 40"
    height={50}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="16" r="8" />
    <circle cx="194" cy="16" r="8" />
    <circle cx="238" cy="16" r="8" />
  </ContentLoader>
);

const List = () => {
  const [listItems, setListItems] = useState(
    Array.from(Array(15).keys(), (n) => n + 1)
  );

  const [isFetching, setIsFetcing] = useInfiniteScroll();

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
      {isFetching && <ThreeDots />}
    </>
  );
};

export default List;
