import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div className="HomePage">
        This is a Home page
        <Link to="/products">Products</Link>
        
      </div>
    );
  }
  
  export default HomePage;
  