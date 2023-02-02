
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuantityController from "./QuantityController";

function ProductDetails({addItemToCart}) {

  const params = useParams();
  const [info, setInfo] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/item/${params.productId}`);
    const itemInfo = await data.json();
    setInfo({
      name: itemInfo.names[7].name,
      id: itemInfo.id,
      cost: itemInfo.cost,
      description: itemInfo.effect_entries[0].effect,
      image: itemInfo.sprites.default,
    });

    console.log(itemInfo);
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
      <img className="item-image" alt={info.name} src={info.image} />
      <div className="description">{info.description}</div>
      <QuantityController min={1} max={99} onQuantityChange={quantityChange}/>
      <button className="purchase-button" onClick={event => addToCart(event)}>Add to Cart</button>
    </div>
  );
}
  
export default ProductDetails;
  