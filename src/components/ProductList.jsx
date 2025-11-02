import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

// URL de tu Lambda / API Gateway
const API_URL = "https://rqhbhtjdt2.execute-api.us-east-2.amazonaws.com/ejemplo/products";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("HTTP error " + res.status);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div style={{ textAlign: "center" }}>Cargando productos...</div>;
  if (error) return <div style={{ textAlign: "center", color: "red" }}>Error: {error}</div>;
  if (!products.length) return <div style={{ textAlign: "center" }}>No hay productos.</div>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image} // ya es URL pÃºblica
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