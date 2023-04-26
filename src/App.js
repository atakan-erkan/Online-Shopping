import "./App.css";
import { ShopContextProvider } from "./context/shop-context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
