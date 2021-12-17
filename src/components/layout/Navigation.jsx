import { FaLeaf } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header style={{ backgroundColor: "aqua" }}>
      <Link to="/">
        <div>JustVegan</div>
        <FaLeaf />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/dishes">Dishes</NavLink>
          </li>
          <li>
            <NavLink to="/desserts">Desserts</NavLink>
          </li>
          <li>
            <NavLink to="/drinks">Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
