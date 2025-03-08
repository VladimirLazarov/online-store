import { Link } from "react-router-dom"; //Import link from react-router-dom for navigation

//Displays a navigation bar wiht links to different pages. Link to the Home, About and Contact pages. 
export default function NavBar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>    
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}