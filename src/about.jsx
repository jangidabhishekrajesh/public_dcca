import React from "react";
import { Link } from "react-router-dom";
import dcca from "./image/dcca.png"

let About = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="col-12">
                    <h2 className="text-center text-primary p-2">ABOUT US</h2>
                </div>
                <div className="row" id="shodowContainer">
                    <div className="col-sm-8">
                        <div className="p-5">
                            <p className="text-light">
                                The Dream City Cricket Academy located in Dream City Society, Shahada, Maharashtra in India.
                                <br />
                                <br />
                                The DCCA was the brainchild of cricket administrator and NDCA Secretary Yuvraj Patil.
                                <br />
                                <br />
                                The academy was established in 2019 as a cricket facility of the Nandurbar District Cricket Association for training young cricketers who are identified as having the potential to represent the Maharshtra Cricket Team As Well As Indian cricket team. It is also used for the rehabilitation of injured cricketers.
                                <br /> 
                                <br />                   
                                In 2020, NDCA tied up with both Maharashtra CRicket Association to get experts in for helping draw the new structure. NDCA decided to make these changes along the lines of the state-of-the-art high-performance centres based in Pune and Mumbai as part of the revamp of the Dream City Cricket Cricket Academy.
                                <br />
                                Current director of the DCCA is the former Maharashtra batsman <b>Yuvraj Patil</b>.
                                <Link to="/coach" style={{textDecoration:"none", color:"orange"}}> Info+</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="mt-5 p-5">
                            <img src={dcca} width="100%" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3 card cardBlur p-5">
                    <h5 className="text-center">
                    "The foundation of the Dream City Cricket Academy was laid by <b>Mr. Abhishek Jangid</b>, with the sole aim of providing an excellent platform for aspiring cricketers with quality training methods, world-class infrastructure, and the opportunity to learn from experts in the field of cricket, through a congenial and innovative environment. Academy Area The cricket academy spans over an 30000 sq feet land at Khetiya Road, Shahada, and is equipped with state-of- the-art training facilities. Our Techniques This all-year- round academy integrates the best in cricketing techniques, technology, fitness, mind games and coaches to create the World-Class Cricketer of Tomorrow. Our Strength For the overall development of the young cricketer, strength improvement through."
                    </h5>
                </div>
            </div>
        </>
    );
}
export default About;