//import useQuery
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

const fetchProductList = () => {
  return axios.get("http://localhost:4000/products");
};

export const RQProductList = () => {
  // const syntex=useQuery("querykey", asyncFunction , {})

  const results = useQuery("rq-products", fetchProductList, {
    // cacheTime:3000,
    staleTime: 30000, //by default 0s

    // refetchOnMount: false,

    // refetchInterval: 5000,
    // refetchIntervalInBackground:true
    // refetchOnWindowFocus: false,
    // enabled:false
    // onError:(error) =>console.log("error" , error.message),
    // onSuccess:(data) => console.log("success" , data)
    // select: (data) => {
    //   return data.data.name;
    // },
  });
  // console.log("result", results);

  const { isLoading, data, isError, error, isFetching, refetch } = results;

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
              <Link to={`/rq-product/${product.id}`} key={product.id}>
                <SingleProduct product={product} />
              </Link>
            ))}
        </div>
      </div>
      <button onClick={refetch}>Click here to Refetch</button>
      {isFetching ? <p>fetching...</p> : null}
    </>
  );
};
