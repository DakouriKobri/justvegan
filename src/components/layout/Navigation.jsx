// NPM Packages
import { FaLeaf } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

// Project File
import "./layout.scss";

export default function Navigation() {
  return (
    <header className="navigation">
      <div className="container row content">
        <Link to="/" className="logo">
          <FaLeaf className="logo-icon" />
          <div className="logo-text">JustVegan</div>
        </Link>

        <nav className="navbar">
          <ul className="navbar__list row">
            <li className="navbar__list__item">
              <NavLink exact to="/" className="navbar__link">
                Home
              </NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/dishes" className="navbar__link">
                Dishes
              </NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/desserts" className="navbar__link">
                Desserts
              </NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/drinks" className="navbar__link">
                Drinks
              </NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/contact" className="navbar__link">
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
