import React from "react";
import squad from "./image/squad.jpg"
import play from "./image/play.jpg"
import playe from "./image/playe.jpg"
import pla from "./image/pla.jpg"
import abhijangid from "./image/abhijangid.jpg"


let Player = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="col-12">
                    <h2 className="text-center text-primary p-2">OUR PLAYERS</h2>
                </div>
                <div className="row p-5" id="shodowContainer">
                    <div className="col-md-9 col-sm-12">
                        <div className="cardBlur p-3">
                            <img src={squad} style={{width:"100%"}} alt="" />
                        </div>
                        <div className="card p-2 mt-3">
                            <h3 className="text-primary text-center"> Our Champions Are Here!</h3>
                        </div>
                        <table className="table table-light table-hover mt-3">
                            <thead className="table-dark">
                                <tr >
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Achievements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Aniket Indrajeet</td>
                                    <td>21 Yrs</td>
                                    <td>Represent Maharashtra in U-16 & U-19</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Shantanu Kasar</td>
                                    <td>23 Yrs</td>
                                    <td>Represent North Maharashtra University</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Anand Birare</td>
                                    <td>26 Yrs</td>
                                    <td>Represent North Maharashtra University</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mukesh Chaudhary</td>
                                    <td>25 Yrs</td>
                                    <td>Represent Rajasthan Ranji Trophy</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Mukesh Jat</td>
                                    <td>19 Yrs</td>
                                    <td>Attend Maharashtra U-19 Camp</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Latikesh Patil</td>
                                    <td>23 Yrs</td>
                                    <td>Attend Selection Matches Of Maharashtra U-23</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Dhiraj Marathe</td>
                                    <td>25 Yrs</td>
                                    <td>Attend Selection Matches Of Maharashtra U-23</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Abhishek Jangid</td>
                                    <td>23 Yrs</td>
                                    <td>Represent Maharashtra in U-19</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="cardBlur p-3">
                            <img src={play} style={{width:"100%"}} alt="" />
                        </div>
                        <br />
                        <div className="cardBlur p-3">
                            <img src={playe} style={{width:"100%"}} alt="" />
                        </div>
                        <br />
                        <div className="cardBlur p-3">
                            <img src={pla} style={{width:"100%"}} alt="" />
                        </div>
                        <br />
                        <div className="cardBlur p-3">
                            <img src={abhijangid} style={{width:"100%"}} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Player;