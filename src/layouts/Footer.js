import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.scss";
import { faFacebook, faInstagram, faPinterest, faSnapchat, faYoutube } from "@fortawesome/free-brands-svg-icons"
import paypal from "../assets/images/paypal.png";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.png";
import express from "../assets/images/express.png";
import discover from "../assets/images/discover.png";


export const Footer = () => {

    return (
        <>
            <div className=" ftr">
                <div className=" d-sm-flex justify-content-sm-start align-items-sm-start d-md-block d-lg-flex justify-content-lg-around align-items-lg-center  ">
                    <div className=" div_1 mt-1 text-sm-start text-md-start  d-lg-flex justify-content-lg-center align-items-lg-center flex-lg-column ">
                            <h5 className="get">GET IN TOUCH</h5>
                        <p className=" para_1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius harum unde veniam</p>
                            <div className="mb-md-1  mt-lg-0 fticn ">
                            <a href="https://fr-fr.facebook.com/" className="texte "><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://www.instagram.com/" className="texte"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.pinterest.fr/"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="https://www.snapchat.com/"><FontAwesomeIcon icon={faSnapchat} /></a>
                            <a href="https://www.youtube.com/?gl=MA&hl=fr" className="texte"><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                        </div>
                    <div className=" d-md-flex d-lg-flex justify-content-lg-center align-items-lg-center">
                        <div className=" div_1 mt-1 text-md-start  d-lg-flex justify-content-lg-center align-items-lg-center flex-lg-column ">
                            <h5>LINKS</h5>
                            <ul className="mt-md-1">
                                <li>Search</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Return</li>
                            </ul>
                        </div>
                        <div className=" div_1 mt-md-1 mt-lg-1 text-md-start  d-lg-flex justify-content-lg-center align-items-lg-center flex-lg-column">
                            <h5>LINKS</h5>
                            <ul className="mt-md-1">
                                <li>Search</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Return</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Copy right */}
                <div className="copy">
                    <div className="cards">
                        <img src={paypal} alt="" srcset="" />
                        <img src={visa} alt="" srcset="" />
                        <img src={mastercard} alt="" srcset="" />
                        <img src={express} alt="" srcset="" />
                        <img src={discover} alt="" srcset="" />
                    </div>
                    <p>Copyright © All Rights Reserved</p>
                </div>
            </div>


        </>
    )
}