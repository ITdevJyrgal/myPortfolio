import React from 'react';
import logo from "../../assets/img/logo.png"

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header-general">
                        <div className="d-flex align-items-center">
                            <img src={logo} alt="img" className="header-general__logo"/>
                            <h1 className="header-general__logo2">jjj</h1>
                        </div>
                        <div>
                            <a href="#" className="header-general__nav">Home</a>
                            <a href="#" className="header-general__nav"> About me</a>
                            <a href="#" className="header-general__nav">Portfolio</a>
                            <a href="#" className="header-general__nav">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;