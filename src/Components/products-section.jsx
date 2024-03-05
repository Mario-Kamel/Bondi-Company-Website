import Product from "./Product";
const ProductsSection = ({title, description, products}) => {
return (
    <div className="products-section">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <hr/>
        <div>
          <div className="product-grid">
              {products.map((product, index) => (
                  <Product key={index} name={product.name} description={product.description} imageUrl={product.imageUrl} />
              ))}
          </div>

        </div>
    </div>
)};

export default ProductsSection;