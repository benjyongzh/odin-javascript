
import { useState, useEffect } from "react";

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
      <div className="button subtract" onClick={() => editQuantity(-1)}>-</div>
      <input type="number" onChange={event => {valueChanged(event)}} value={quantity}/>
      <div className="button add" onClick={() => editQuantity(1)}>+</div>
    </div>
  );
}
  
export default QuantityController;
  