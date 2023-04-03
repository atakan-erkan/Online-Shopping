import { useState } from "react";
import "./List.css";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

function List({ products }) {
  const [filterText, setFilterText] = useState("");
  const changeFilter = (e) => {
    setFilterText(e.target.value);
  };
  const filtered = products.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
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
    <div>
      <div className={color ? "header header-bg" : "header"}>
        <nav className="nav-navbar">
          <a href="/" className="navbar-brand" style={{ color: "#125B50" }}>
            <FaShoppingCart size={30} style={{ color: "#125B50" }} /> ONLINE
            SHOPPING
          </a>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#125B50" }} />
            ) : (
              <FaBars size={30} style={{ color: "#125B50" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu mt-3"}>
            <li className="nav-navbar-item ">
              <a href="/" onClick={closeMenu}>
                Anasayfa
              </a>
            </li>
            <li className="nav-navbar-item ">
              <a href="#ürünler" onClick={closeMenu}>
                Ürünler
              </a>
            </li>
            <li className="nav-navbar-item ">
              <a href="#iletisim" onClick={closeMenu}>
                İletişim
              </a>
            </li>
            <li className="nav-navbar-item ">
              <input
                className="form-control"
                placeholder="Search"
                value={filterText}
                onChange={changeFilter}
              />
            </li>
            <li className="nav-navbar-item">
              <a href="/">Sepetim</a>
              <a href="/">
                <FaShoppingCart size={28} style={{ color: "#125B50" }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row" id="ürünler">
                {filtered.map((product, i) => (
                  <div className="col-12 col-sm-4 mt-4">
                    <div class="d-flex flex-column flex-sm-row align-items-center border border-secondary rounded p-3 test-list-box">
                      <div class="d-flex ml-4 ml-3 flex-column test-list-description">
                        <h2 class="" id="heading0">
                          {product.title}
                        </h2>
                        <div class="test-list-summary">
                          {product.description}
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mt-3" aria-labelledby="heading0">
                              <h2 id="heading0">{product.price} $</h2>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mt-3" aria-labelledby="heading0">
                              <h2 className="float-end" id="heading0">
                                Stok: {product.stock}
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div class="mt-3" aria-labelledby="heading0">
                          <a
                            href="/tests"
                            class="btn btn-rounded"
                            style={{ background: "#125B50", color: "white" }}
                          >
                            Sepete Ekle
                          </a>
                        </div>
                      </div>

                      <div class="test-list-image" aria-labelledby="heading0">
                        <a href="/tests">
                          <img
                            src={product.images[0]}
                            className="rounded-3"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="total mt-3">{filtered.length} Ürün</p>
    </div>
  );
}

export default List;
