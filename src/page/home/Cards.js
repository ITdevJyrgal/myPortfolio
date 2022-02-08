import React from 'react';
import CardDate from "./CardDate.js"
import Aplikation from "./Aplikation";

const Cards = () => {
    return (
        <div>
            <div className="cards">
                <div className="container">
                    <div className="cards-general">
                        <div className="row">
                            {
                                CardDate.map(el => {
                                    return (
                                        <div className="col-4">
                                            <div className="cards-general__block">
                                                <div
                                                    className="cards-general__card d-flex align-items-center justify-content-center">
                                                    <img src={el.img} alt="" className="cards-general__img"/>
                                                    <h2 className="cards-general__item">{el.item}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Aplikation/>
        </div>
    );
};

export default Cards;