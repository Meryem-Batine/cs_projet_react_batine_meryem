import React from "react";
import { Header } from "../../layouts/Header";
import { Footer} from "../../layouts/Footer";
import { Pgpanier } from "./components/panier";

export const Panier = () => {
  return (
    <>
    <Header />
    <Pgpanier/>
    <Footer/> 
    </>
  );
};