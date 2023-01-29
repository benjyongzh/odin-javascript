import ProductList from "./ProductList";

/* const allProducts = [
  {
    name: "BMX400",
    price: 450,
    id: "mountainbike1"
  },
  {
    name: "BMX129C",
    price: 340,
    id: "mountainbike2"
  },
  {
    name: "Shimano 908B",
    price: 880,
    id: "mountainbike3"
  },
  {
    name: "Snake series 14",
    price: 1100,
    id: "mountainbike4"
  },
] */

function MountainBikesProducts({products}) {

  return (
    <div className="MountainBikesProducts">
      This is Mountainbikes
      <ProductList products={products}/>
    </div>
  );
}
  
  export default MountainBikesProducts;
  