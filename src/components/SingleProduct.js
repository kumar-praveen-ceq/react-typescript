

const SingleProduct = ({ product }) => {
  return (
    <div className="card shadow single_product">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="card-img-top bg-img"
      />
      <div className="card-body">
        <div className="row mt-2">
          <h5 className="card-title text-center">{product.name}</h5>
        </div>
        <div className="row mt-2">
          <p className="card-text">{product.price}$</p>
        </div>

        <div className="row mt-2">
          <button className="btn btn-success m-auto">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
