import { useState, useEffect } from "react";
import "../styles/CartItem.css";

function CartItem({quantity, id}) {

  const [info, setInfo] = useState({});

  const fetchData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
    const itemInfo = await data.json();
    setInfo({
      name: itemInfo.names[7].name,
      // id: itemInfo.id,
      price: itemInfo.cost,
      description: itemInfo.effect_entries[0].short_effect,
      image: itemInfo.sprites.default,
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const addToCart = event => {
  //   event.preventDefault();
  //   addItemToCart({name: info.name, price: info.cost, quantity: 1, id: info.id})
  //   console.log(`${info.name} added to cart. Value = $${info.cost}.`)
  // };

  return (
    <div className="cart-item">
      <div className="name">{info.name}</div>

      <div className="item-info">
        <img className="info-image" alt={info.name} src={info.image} />
        <div className="description">{info.description}</div>
      </div>
      
      <div className="price-unit" >{info.price}</div>
      <div className="quantity" >{quantity}</div>
      <div className="price-total" >{quantity*info.price}</div>
    </div>
  );
}
  
  export default CartItem;
  