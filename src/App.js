import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import LandingPage from "./pages/landing-page";
import ProductsPage from "./pages/products-page.jsx";
import { useState } from "react";
import strings from "./Assets/localization.jsx";
function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "ar");
  localStorage.setItem("language", language);
  strings.setLanguage(language);
  return (
    <BrowserRouter>
      <Navbar language={language} setLanguage={setLanguage}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
