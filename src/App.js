import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductsList from "./pages/ProductsList";
import { RQProductList } from "./pages/RQProductList";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQProductDetails } from "./pages/RQProductDetails";
import { RQPagination } from "./pages/RQPagination";
import { RQInfinite } from "./pages/RQInfinite";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/product" element={<ProductsList />} />
        <Route path="/rq-product" element={<RQProductList />} />
        <Route path="/rq-product/:productId" element={<RQProductDetails />} />
        <Route path="/rq-pagination" element={<RQPagination />} />
        <Route path="/rq-infinite" element={<RQInfinite />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </>
  );
}

export default App;
