 
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <span className="category">{product.category}</span>

      <h4>{product.title}</h4>
      <img src={product.productImage} alt={product.title} />

     

      <div className="price">
        {product.oldPrice && (
          <span className="old-price">${product.oldPrice}</span>
        )}
        <span className="new-price">${product.price}</span>
      </div>

      <button className="cart-btn">
          <i className='fa-solid fa-cart-shopping'></i>
      </button>
    </div>
  );
};

export default ProductCard;