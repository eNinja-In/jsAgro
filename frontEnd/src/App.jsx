import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/homeMain";
import Gallery from "./components/gallery/galleryMain";
import Contact from "./components/conatct/contMain";
import About from "./components/about/aboutMain";
import Product from "./components/products/prodMain";
import NavBar from "./components/nav-foot/navBar";
import FootBar from "./components/nav-foot/footBar";
import ScrollToTop from "./components/other/scrollTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <FootBar />
      </BrowserRouter>
    </>
  );
}

export default App;
