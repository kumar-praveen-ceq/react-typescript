//import useQuery
import axios from "axios";
import { QueryClient, useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

// const fetchProductList = (productId) => {
//   return axios.get(`http://localhost:4000/products/${productId}`);
// };
const fetchProductList = ({ queryKey }) => {
  console.log("queryKey", queryKey);
  let productId = queryKey[1];
  return axios.get(`http://localhost:4000/products/${productId}`);
};

export const RQProductDetails = () => {
const queryClient =new QueryClient();

  const { productId } = useParams();
  const infinite =queryClient.getQueriesData("rq-infinite")

  const results = useQuery(
    ["rq-products", productId],
     () => fetchProductList(productId)
    // fetchProductList
    ,

    {}
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
          {data && data.data && (
            <SingleProduct product={data.data} key={data.data.id} />
          )}
        </div>
      </div>
    </>
  );
};
