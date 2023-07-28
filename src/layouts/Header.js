import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png.webp"
import "./Header.scss"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export const Header=()=>
{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return(
        <>
            {/* <h1>helo</h1> */}
            <header>
            <div className="header">

            </div>

            <div class="icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
             </div>


            <nav>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>

            <div className={menuOpen ? "menu open" : "menu"}>
            <span class="close" onClick={toggleMenu}>X</span>

                <NavLink className="lien_menu" to={"/"}>Home</NavLink>
                <NavLink className="lien_menu" to={"/product"}>Product</NavLink>
                <NavLink className="lien_menu" to={"/about"}>About</NavLink>
                <NavLink className="lien_menu" to={"/contact"}>Contact</NavLink>
            </div>

            <div className="favoris">
            <NavLink className="lien_menu" to={"/coup"}><FontAwesomeIcon  icon={faHeart} className="icone "/></NavLink>
            <NavLink className="lien_menu" to={"/panier"}><FontAwesomeIcon icon={faBagShopping} className="icone"/></NavLink>
            </div>

            </nav>

            </header>
        </>
    )
}