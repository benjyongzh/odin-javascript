

function ShoppingCartBar({cartItems}) {

  return (
    <div className="ShoppingCartBar">
      The shopping cart is: {cartItems.map(item => {
      return (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>$ {item.price}</div>
          <div>{item.quantity} pcs.</div>
        </div>
      )
      })}
    </div>
  );
}
  
  export default ShoppingCartBar;
  