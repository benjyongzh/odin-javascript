import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemCard({itemName, itemURL, addItemToCart}) {

  const [info, setInfo] = useState({});

  const fetchData = async () => {
    const data = await fetch(itemURL);
    const itemInfo = await data.json();
    setInfo({
      name: itemInfo.names[7].name,
      id: itemInfo.id,
      cost: itemInfo.cost,
      // description: itemInfo.effect_entries[0].effect,
      image: itemInfo.sprites.default,
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = event => {
    event.preventDefault();
    addItemToCart({name: info.name, price: info.cost, quantity: 1})
    console.log(`${info.name} added to cart. Value = $${info.cost}.`)
  };

  return (
    <div className="item-card">
      <img className="item-image" alt={info.name} src={info.image} />
      <div className="item-name">{info.name}</div>
      <div className="item-price">$ {info.cost}</div>
      <button className="item-quickadd-button" onClick={event => addToCart(event)}>Quick Add</button>
      <Link to={`/products/${info.id}`} className="item-details-button">Details</Link>
    </div>
  );
}
  
  export default ItemCard;
  