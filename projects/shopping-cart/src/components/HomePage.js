import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
    return (
      <div className="HomePage">
        <img className="homepage-icon" src="#" alt="Pokemon Store"/>
        <div className="side-area">
          <div className="title">Pok-e-Mart</div>
          <div className="header">Because everyone deserves a pokemon, and every pokemon deserves proper care.</div>
          <Link className="navlink" to="/products">Store</Link>
        </div>
        
      </div>
    );
  }
  
  export default HomePage;
  