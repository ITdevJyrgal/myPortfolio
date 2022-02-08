import React from 'react';
import logo from "./../assets/img/logo.png"
import {Link} from "react-router-dom"
import Home from "./../page/home/Home"

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header-general">
                        <div>
                            <Link to="/"> <img src={logo} alt="img" className="header-general__logo"/></Link>
                        </div>
                        <div className="d-flex">
                            <Link to="/"><h1 className="header-general__nav" >home</h1></Link>
                            <Link to="/about"><h1 className="header-general__nav" >about</h1></Link>
                            <Link to="/contacts"><h1 className="header-general__nav" >contacts</h1></Link>
                        </div>
                        <div>
                            <button className="header-general__btn">contacts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;