
import { useState, useEffect } from "react";
import "../styles/QuantityController.css";

function QuantityController({min, max, onQuantityChange}) {

  const [quantity, setQuantity] = useState(min);

  const editQuantity = change => {
    if (checkWithinBounds(quantity + change)) setQuantity(value => value + change);
  };

  const valueChanged = event => {
    const value = event.target.value;
    if (checkWithinBounds(value)){
      setQuantity(value);
    } else {
      value<min ? setQuantity(min) : setQuantity(max)
    };
  };

  const checkWithinBounds = value => {
    return (value >= min && value <= max);
  }

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity]);

  return (
    <div className="QuantityController">
      <button className="button subtract" onClick={() => editQuantity(-1)}>-</button>
      <input type="number" onChange={event => {valueChanged(event)}} value={quantity}/>
      <button className="button add" onClick={() => editQuantity(1)}>+</button>
    </div>
  );
}
  
export default QuantityController;
  