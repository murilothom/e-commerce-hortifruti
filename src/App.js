import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";

import { ItemsStorage } from "./context/ItemsContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ItemsStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </ItemsStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
