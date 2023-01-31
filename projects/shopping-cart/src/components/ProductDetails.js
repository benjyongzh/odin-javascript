
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const params = useParams();
  const [info, setInfo] = useState({});

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProductDetails">
      {info.name}
    </div>
  );
}
  
export default ProductDetails;
  