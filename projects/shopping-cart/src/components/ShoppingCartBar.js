import "../styles/ShoppingCartBar.css";
import CartItem from "./CartItem";

function ShoppingCartBar({cartItems}) {
  return (
    <div className="ShoppingCartBar">
      <div className="header">Cart</div>
      <div className="cart-content">
        {cartItems.map(item => {
          return (
            <CartItem key={item.id} quantity={item.quantity} id={item.id}/>
          )
        })}
      </div>
    </div>
  );
}
  
  export default ShoppingCartBar;
  