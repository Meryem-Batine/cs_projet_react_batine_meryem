import { NavLink } from "react-router-dom"

export const Header = () =>{
    return (
        <>
     <header className="mt-0 ">
                <div class="nav-bar  ">
                <NavLink className=" nav-link logo" >LOGO</NavLink>
                    {/* <a class="navbar-brand w-25 bg-secondary mx-9" href="#"></a> */}
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="navgt" id="navgt">
                        <div className="nav-items d-flex ">
                            <NavLink className="nav-link   nav_0" >Home</NavLink>
                            <NavLink className="nav-link   nav_0" >Product</NavLink>
                            <NavLink className="nav-link   nav_0" >About</NavLink>
                            <NavLink className="nav-link   nav_0" >Contact</NavLink>
                        </div>
                    </div>
                </div>
            {/* <div className="bg-danger user mb-1">

            </div> */}
     </header>
        </>
    )
}