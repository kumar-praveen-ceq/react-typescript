//import useQuery
import axios from "axios";
import { Fragment, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import SingleProduct from "../components/SingleProduct";

const fetchProductList = ({ pageParam = 1 }) => {
  return axios.get(
    `http://localhost:4000/products?_limit=2&_page=${pageParam}`
  );
};

export const RQInfinite = () => {
  const results = useInfiniteQuery(["rq-infinite"], fetchProductList, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 8) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log(results);
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = results;

  console.log({ isLoading, isFetching });

  console.log("data", data);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div className="home">
        <div className="product_container">
          {data &&
            data.pages &&
            data.pages.length > 0 &&
            data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.data.map((product) => (
                  <SingleProduct key={product.id} product={product} />
                ))}
              </Fragment>
            ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button onClick={fetchNextPage} disabled={!hasNextPage}>
            Next
          </button>
        </div>

        <p>{isFetching && !isFetchingNextPage ? "fetching......" : null}</p>
      </div>
    </>
  );
};
