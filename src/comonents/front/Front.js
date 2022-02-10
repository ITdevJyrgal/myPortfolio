import React from 'react';
import Date from "./front-date"

const Front = () => {
    return (
        <div>
            <div className="front">
                <div className="container">
                    <div className="front-general  d-flex  justify-content-around">
                        {
                            Date.map(el => {
                                return (
                                    <div className="front-general__block">
                                        <img src={el.img} alt="img"/>
                                        <h1 className="front-general__title">{el.title}</h1>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Front;