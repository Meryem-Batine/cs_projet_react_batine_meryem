import { Footer } from "../../layouts/Footer";
import { Header } from "../../layouts/Header";
import { Backcnct } from "./conatct/contact";
import { Contactinfo } from "./contactinfo/contactinfo";

export const Contact = () => {
    return (
        <>
            <Header />
            <Backcnct />
            <Contactinfo />
            <Footer />
        </>
    );
};