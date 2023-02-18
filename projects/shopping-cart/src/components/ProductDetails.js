
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuantityController from "./QuantityController";
import "../styles/ProductDetails.css";
import { fetchItemInfo } from "../api";

function ProductDetails({addItemToCart}) {

  const params = useParams();
  const [info, setInfo] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    const itemInfo = await fetchItemInfo(`https://pokeapi.co/api/v2/item/${params.productId}`);
    setInfo(itemInfo);
  };

  const quantityChange = value => {
    setQuantity(value); 
  }

  const addToCart = event => {
    event.preventDefault();
    addItemToCart({name: info.name, price: info.cost, quantity: quantity, id: info.id})
    console.log(`${info.name} added to cart. Value = $${info.cost}.`)
  };

  useEffect(() => {
    console.log(`quantity in product details is now ${quantity}`);
  }, [quantity]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProductDetails">
      <h1>{info.name}</h1>
      <img alt={info.name} src={info.image} />
      <div className="info">
        <div className="description">{info.description}</div>
        <div className="quantity-controller">
          <QuantityController min={1} max={99} onQuantityChange={quantityChange}/>
        </div>
        <button className="purchase-button" onClick={event => addToCart(event)}>Add To Cart</button>
      </div>
    </div>
  );
}
  
export default ProductDetails;
  