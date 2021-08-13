import { useCallback, useEffect, useState } from "react";

const useInfiniteScroll = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isFetching
    ) {
      setIsFetching(true);
    }
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
