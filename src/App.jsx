import ProductList from "./components/ProductList";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "30px 0",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Lista de Productos
      </h1>
      <ProductList />
    </div>
  );
}

export default App;