import ProductList from "./ProductList";

/* const allProducts = [
  {
    name: "BMX200",
    price: 280,
    id: "citybike1"
  },
  {
    name: "Gazelle 4T9",
    price: 510,
    id: "citybike2"
  },
  {
    name: "Giant type 5",
    price: 230,
    id: "citybike3"
  },
  {
    name: "Gazelle junior",
    price: 120,
    id: "citybike4"
  },
  {
    name: "Shimano 1290",
    price: 760,
    id: "citybike5"
  },
]; */

function CityBikesProducts({products}) {



  return (
    <div className="CityBikesProducts">
      This is citybikes
      <ProductList products={products}/>
    </div>
  );
}
  
  export default CityBikesProducts;
  