import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <nav>
        <Link to="/">Shopify</Link>
        <Link to="/product">
          <button className="btn position-relative p-0"> Products</button>
        </Link>

        <Link to="/rq-product">
          <button className="btn position-relative p-0"> RQ-Products</button>
        </Link>

        <Link to="/rq-pagination">
          <button className="btn position-relative p-0"> RQ-Pagination</button>
        </Link>
        <Link to="/rq-infinite">
          <button className="btn position-relative p-0"> RQ-Infinite</button>
        </Link>
      </nav>
    </nav>
  );
};

export default Navbar;
