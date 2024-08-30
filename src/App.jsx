import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./component/header";
import ProductDetail from "./pages/productdeatail";
import NotFound from "./pages/pagenotfound";
import Contact from './pages/contact';

import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;