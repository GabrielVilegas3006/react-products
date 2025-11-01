function ProductItem({ name, price, description, image }) {
  const imgSrc = new URL(image, import.meta.url).href;

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