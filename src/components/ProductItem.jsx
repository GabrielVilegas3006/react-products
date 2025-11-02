function ProductItem({ name, price, description, image }) {
  // Como image ya es URL pÃºblica, solo usamos directamente
  const imgSrc = image;

  return (
    <div className="card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}

export default ProductItem;
