import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import SingleProduct from "../components/SingleProduct";

// const fetchProductList = (productId) => {
//   return axios.get(`http://localhost:4000/products/${productId}`);
// };
const fetchProductList = ({ queryKey }) => {
  console.log("queryKey", queryKey);
  let pageNumber = queryKey[1];
  return axios.get(
    `http://localhost:4000/products?_limit=2&_page=${pageNumber}`
  );
};

export const RQPagination = () => {
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber);

  const results = useQuery(
    ["rq-pagination", pageNumber],
    //  () => fetchProductList(productId)
    fetchProductList,
    {
      keepPreviousData: true,
    }
  );
  const { isLoading, data, isError, error, isFetching } = results;

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
            data.data &&
            data.data.map((product) => (
              <SingleProduct product={product} key={product.id} />
            ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber === 1}
          >
            Prev
          </button>
          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={pageNumber === 7}
          >
            Next
          </button>
        </div>

        {isFetching && <p>fetchingg......</p>}
      </div>
    </>
  );
};
