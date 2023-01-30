import { Link } from "react-router-dom";

function ItemCard({itemName, itemPrice}) {

  const addToCart = event => {
    event.preventDefault();
    console.log(`${itemName} added to cart. Value = $${itemPrice}.`)
  };

  return (
    <div className="item-card">
      <div className="item-image" />
      <div className="item-name">{itemName}</div>
      <div className="item-price">${itemPrice}</div>
      <button className="item-quickadd-button" onClick={() => addToCart}>Quick Add</button>
      <Link to={`/products/${itemName}`} className="item-details-button">Details</Link>
    </div>
  );
}
  
  export default ItemCard;
  