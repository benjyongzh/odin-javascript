import { useState, useEffect } from "react";
import "../styles/CartItem.css";
import { fetchItemInfo } from "../api";

function CartItem({quantity, id}) {

  const [info, setInfo] = useState({});

  const fetchData = async () => {
    const itemInfo = await fetchItemInfo(`https://pokeapi.co/api/v2/item/${id}`);
    setInfo(itemInfo);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cart-item">
      <div className="name">{info.name}</div>

      <div className="item-info">
        <img className="info-image" alt={info.name} src={info.image} />
        <div className="description">{info.shortDescription}</div>
      </div>
      
      <div className="price-unit" >{info.cost}</div>
      <div className="quantity" >{quantity}</div>
      <div className="price-total" >{quantity*info.cost}</div>
    </div>
  );
}
  
  export default CartItem;
  