import React from "react";
import './header-footer.css';
import LogoMery from "../../Assets/images/mj-logo.png"

function Header () {
    return (
        <header role="banner">
            <img id="logo-main" src={ LogoMery } style = {{width :"100px"} } alt="Logo Mary Jane"/>
            <nav id="navbar-primary" class="navbar-default" role="navigation">
                <div className="container-nav">
                    <div className="nav">
                        <div className="nav-line"></div>
                        <div className="burger-menu">
                            <i className="fas fa-bars bars"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header