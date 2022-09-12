import React from "react";
import './header-footer.css';
import LogoMery from "../../Assets/images/mj-logo.png"

function Footer () {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <img className="footer-img" src={ LogoMery } style = {{width :"100px"} } alt="Logo Mary Jane"/>
                    <div className="top-row">
                        <h6>About</h6>
                    </div>
                    <p className="text-justify">Donec convallis orci lacus, nec varius justo laoreet eu. Proin sem erat, euismod eu neque eu, semper consectetur libero. Morbi vestibulum dapibus laoreet. </p>
                    <div className="sector-categories">
                        <div clasNames="cat-columns">
                            <h6>Categories 1</h6>
                            <ul className="footer-links">
                                <li><a href={"#"}>Item 1</a></li>
                                <li><a href={"#"}>Item 2</a></li>
                                <li><a href={"#"}>Item 3</a></li>
                                <li><a href={"#"}>Item 4</a></li>
                                <li><a href={"#"}>Item 5</a></li>
                                <li><a href={"#"}>Item 6</a></li>
                            </ul>
                        </div>
                    <div className="cat-columns">
                        <h6>Categories 2</h6>
                        <ul className="footer-links">
                            <li><a href={"#"}>Item 1</a></li>
                            <li><a href={"#"}>Item 2</a></li>
                            <li><a href={"#"}>Item 3</a></li>
                            <li><a href={"#"}>Item 4</a></li>
                            <li><a href={"#"}>Item 5</a></li>
                            <li><a href={"#"}>Item 6</a></li>
                        </ul>
                    </div>
                    <div className="cat-columns">
                        <h6>Categories 3</h6>
                        <ul className="footer-links">
                            <li><a href={"#"}>Item 1</a></li>
                            <li><a href={"#"}>Item 2</a></li>
                            <li><a href={"#"}>Item 3</a></li>
                            <li><a href={"#"}>Item 4</a></li>
                            <li><a href={"#"}>Item 5</a></li>
                            <li><a href={"#"}>Item 6</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="container-bottom">
                <div className="row">
                    <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
                        <a href={"#"}>MaryJane Productions</a>.
                    </p>
    
                    <ul className="social-icons">
                        <li><a href={"#"}> <i className="fa-brands fa-facebook facebook"></i> </a></li>
                        <li><a href={"#"}> <i className="fa-brands fa-linkedin linkedin"></i> </a></li>
                        <li><a href={"#"}> <i className="fa-brands fa-instagram instagram"></i> </a></li>
                        <li><a href={"#"}> <i className="fa-brands fa-twitter twitter"></i> </a>   </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
