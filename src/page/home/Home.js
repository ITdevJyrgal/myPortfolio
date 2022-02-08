import React from 'react';
import Date from "./Date"

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container">
                    <div>
                        <h1 className="d-flex justify-content-center my-3 mb-5 home-general__titles">About me </h1>
                    </div>
                    <div className="home-general">
                        <div className="row">
                            {
                                Date.map(el => {
                                    return (
                                        <div className="col-6">
                                            <div className="home-general__block">
                                                <h1 className="home-general__title">{el.title}</h1>
                                                <p className="home-general__item">{el.item}</p>
                                                <img src={el.image} alt="" className="home-general__img"/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;