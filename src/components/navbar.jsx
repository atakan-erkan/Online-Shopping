import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { filterText, changeFilter } = useContext(ShopContext);
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //close menu on click
  const closeMenu = () => setClick(false);
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <nav className="nav-navbar">
          <Link to="/" className="navbar-brand" style={{ color: "#125B50" }}>
            <FaShoppingCart size={30} style={{ color: "#125B50" }} /> ONLINE
            SHOPPING
          </Link>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#125B50" }} />
            ) : (
              <FaBars size={30} style={{ color: "#125B50" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu mt-3"}>
            <li className="nav-navbar-item ">
              <Link to="/" onClick={closeMenu}>
                Anasayfa
              </Link>
            </li>
            <li className="nav-navbar-item ">
              <Link to="#ürünler" onClick={closeMenu}>
                Ürünler
              </Link>
            </li>
            <li className="nav-navbar-item ">
              <Link to="#iletisim" onClick={closeMenu}>
                İletişim
              </Link>
            </li>
            <li className="nav-navbar-item ">
              <input
                className="form-control"
                placeholder="Aradığınız ürün veya markayı yazınız"
                value={filterText}
                onChange={changeFilter}
              />
            </li>
            <li className="nav-navbar-item">
              <Link to="/cart">Sepetim</Link>
              <Link to="/cart">
                <FaShoppingCart size={28} style={{ color: "#125B50" }} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
