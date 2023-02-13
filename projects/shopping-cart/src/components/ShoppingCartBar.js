import "../styles/ShoppingCartBar.css";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";

function ShoppingCartBar({cartItems, visibility}) {

  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    let value = cartItems
    .map(item => item.quantity * item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setCartValue(value);
  });

  const checkout = event => {
    event.preventDefault();
    console.log('checked out');
  }

  let visibleStyle = visibility ? "visible" : "hidden";

  return (
    <div className="ShoppingCartBar" style={{visibility: `${visibleStyle}`}}>
      <div className="header">Cart</div>
      <div className="sections">
        <div className="section-name">Item</div>
        <div className="section-name">Unit Price</div>
        <div className="section-name">Quantity</div>
        <div className="section-name">Total Price</div>
      </div>
      <div className="cart-content">
        {cartItems.map(item => {
          return (
            <CartItem key={item.id} quantity={item.quantity} id={item.id}/>
          )
        })}
      </div>

      <div className="summary">
        <div className="header">Total</div>
        <div className="value">${cartValue}</div>
        <button className="checkout-button" onClick={event => checkout(event)}>Checkout</button>
      </div>

    </div>
  );
}
  
  export default ShoppingCartBar;
  