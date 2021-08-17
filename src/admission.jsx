import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

let Admission = () => {
    const [admission, setAdmission] = useState();
    
    const getAPIData = async () => {
    try {
    const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a37f46d08330467b956ccf1838e919b2"
    ); 

    setAdmission(data.articles);
    } catch {}
  };
  useEffect(() => { 
    getAPIData();
  }, []);

    return(
        <>
            <div className="container-fluid">
                <div className="col-12">
                    <h2 className="text-center text-primary p-2">GET ADMISSION</h2>
                </div>
                <div className="row" id="shodowContainer">
                    <div className="col-md-8 col-sm-12">
                        <h3 className="text-light p-3 mt-4">
                            Enter Your Admission Information Below!
                        </h3>
                        <div className="container cardBlur mb-5">
                            <div className="row p-5">
                                <h6 className="mt-2">Name</h6>
                                <hr />
                                <div className="col-md-4 col-sm-12">
                                    <label htmlFor="name" className="form-label"><small>First</small></label>
                                    <input name="name" type="text" className="form-control" id="name"/>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <label htmlFor="middleName" className="form-label"><small>Middle</small></label>
                                    <input name="middle" type="text" className="form-control" id="middleName"/>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <label htmlFor="lastName" className="form-label"><small>Last</small></label>
                                    <input name="last" type="text" className="form-control" id="lastName"/>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h6 className="mt-4">Birth Date</h6>
                                    <hr />
                                    <input type="date" name="date" id="date" className="form-control"/>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h6 className="mt-4">Gender</h6>
                                    <hr />
                                    <input type="radio" name="gender" id="male"/> &nbsp;
                                    <label htmlFor="male"><small>Male</small></label>&nbsp;&nbsp;
                                    <input type="radio" name="gender" id="female"/> &nbsp;
                                    <label htmlFor="female"><small>Fe-Male</small></label>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <h6 className="mt-4">Address</h6>
                                    <hr />
                                    <input name="address" type="text" className="form-control" id="address"/>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h6 className="mt-4">City</h6>
                                    <hr />
                                    <input type="text" name="cityName" className="form-control" id="cityName" />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h6 className="mt-4">State</h6>
                                    <hr />
                                    <input type="text" name="stateName" className="form-control" id="stateName" />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h6 className="mt-4">Email Id</h6>
                                    <hr />
                                    <input type="text" name="email" className="form-control" id="email" />
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h6 className="mt-4">Phone</h6>
                                    <hr />
                                    <input type="text" name="tel" className="form-control" id="tel" />
                                </div>
                                <div className="col-12 text-center">
                                   <Link to="/next"><button type="submit" className="btn btn-primary mt-5">Next</button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h3 className="text-light text-center p-3 mt-4">
                            Recent News
                        </h3>
                        {admission && admission.map((item, idx) => 
                        <div key= {idx}>
                            <div className="cardBlur m-1 p-2">
                                <ul style={{listStyle:'none'}}>
                                    <b>URL</b><li><small><a href={item.url} target="_blank">{item.url}</a></small></li>
                                    <img src={item.urlToImage} alt="img" width="100%"/>
                                    <b>Date & Time</b ><li><small>{item.publishedAt}</small></li>
                                </ul>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Admission;