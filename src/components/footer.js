import React from "react";

export const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container mt-2 mb-3">
        <div className="row">
          <div className="col-md-4">
            <li className="nav-item mt-5">
              <a href="/" className="navbar-brand" style={{ color: "#125B50" }}>
                ONLINE SHOPPING
              </a>
            </li>
          </div>
          <div
            className="col-md-8 mb-4 mb-md-0"
            style={{ color: "#125B50", fontWeight: "500" }}
          >
            <div className="footer-nav-title" id="iletisim">
              İLETİŞİM
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <i className="fa-solid fa-location-dot"></i> Adres:
              </li>
              <li className="nav-item">Yatağan/Muğla</li>
              <li className="nav-item">
                <i className="fa-solid fa-phone"></i> Telefon:
              </li>
              <li className="nav-item">+90 555 555 5555</li>
              <li className="nav-item">
                <i className="fa-solid fa-envelope"></i> Email:
              </li>
              <li className="nav-item">onlineshopping.info@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
