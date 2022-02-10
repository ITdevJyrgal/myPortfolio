import React from 'react';
import me from "../../assets/img/me.png"

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="container">
                    <div className="hero-general">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-12">
                                <span>
                                     <h1 className="hero-general__title">Hello
                                    I'm Jyrgal
                                    Jyldyzbek uulu
                                </h1>
                                </span>
                                <span>
                                    <p className="hero-general__item">I've been doing front-end and back-end
                                        development for a year now.contact me</p>
                                </span>

                                <span>
                                    <button className="hero-general__btn">contact me </button>
                                </span>

                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-12">
                                <div className="hero-general__square"/>
                                    <div className="hero-general__block">
                                        <img src={me} alt="img" className="hero-general__img"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;