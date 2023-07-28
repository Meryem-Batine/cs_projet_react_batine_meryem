import React from "react";
import { Header } from "../../layouts/Header";
import { Carousel } from "./components/carousel";
import { Navtab} from "./navtab/navtab";
import { Footer} from "../../layouts/Footer";
import { Carte } from "./cards/cards";
import { Video } from "./hmvideo/hmvideo";

export const Home = () => {
  return (
    <>
    <Header />
    <Carousel/>
    <Carte/>
    <Navtab/>
    <Video/>

    <Footer/>
    </>
  );
};
