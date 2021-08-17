import React from "react";
import { Link } from "react-router-dom";
import dcca from "./image/dcca.png"

let Header = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg position-sticky navbar-light bg-light p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={dcca} style={{width:"40px"}} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end p-1" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link mx-1" id="shadow-nav" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-1" id="shadow-nav" to="/player">PLAYERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-1" id="shadow-nav" to="/coach">COACHES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-1" id="shadow-nav" to="/admission">GET ADMISSION</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-1" id="shadow-nav" to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;