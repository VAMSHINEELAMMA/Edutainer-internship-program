import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Loginform from "./components/Loginform";
import Product from "./components/Product";
import Shopping from "./components/Shopping";

function App() {
  return (
    <BrowserRouter>
      <Navbar cartCount={0} />

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Shopping />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;