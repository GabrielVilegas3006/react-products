import ProductItem from "./ProductItem";
import products from "../data/products.json";

function ProductList() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "1000px",
  },
};

export default ProductList;