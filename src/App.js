import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Header } from "./layouts/Header";
import {Footer} from "./layouts/Footer";
import { Contact } from "./pages/contact/contact";
import { Product } from "./pages/product/product";
import { Coup } from "./pages/coup/coup";
import { Panier } from "./pages/panier/panier";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/header" element={<Header />}/>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/coup" element={<Coup/>}/>
        <Route path="/panier" element={<Panier/>}/>
      </Routes>
    </>
  );
};
