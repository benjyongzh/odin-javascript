import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
    return (
      <div className="HomePage">
        <img className="homepage-icon" src="#" alt="Pokemon Store"/>
        <div className="header">Always near you</div>
        <Link className="navlink" to="/products">Store</Link>
        
      </div>
    );
  }
  
  export default HomePage;
  