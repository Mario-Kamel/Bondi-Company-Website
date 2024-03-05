import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import LandingPage from "./pages/landing-page";
import ProductsPage from "./pages/products-page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
