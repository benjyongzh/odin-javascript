
import { useState, useEffect } from "react";

function QuantityController({min, max}) {

  const [quantity, setQuantity] = useState(1);

  const editQuantity = change => {
    setQuantity(value => value + change);
  };

  const valueChanged = event => {
    setQuantity(event.target.value);
  };

  const clampValue = () => {
    if (quantity < min){
      setQuantity(min);
    } else if (quantity > max){
      setQuantity(max);
    };
  };

  useEffect(() => {
    clampValue();
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
  