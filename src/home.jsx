import {useState} from "react";
import { Link } from "react-router-dom";
import cricket from "./image/cricket.png";

let Home = () => {

    const [form, setForm] = useState({
        name: "",
        email : "",
        pname : "",
        tel : "",
        city : "",
        state : "",
    })
    const [errors, setErrors] = useState({
        nameErr : '',
        emailErr :'',
        pnameErr : '',
        telErr : '',
        cityErr : '',
        stateErr : '',
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let nameErr = '';
        let emailErr = '';
        let pnameErr = '';
        let telErr = '';
        let cityErr = '';
        let stateErr = '';


        if(form.name.length <=6){
            nameErr = "It is required, Please mention your Full Name!"
        }
        if (!form.email.includes('@')){
            emailErr = "Enter an valid email!"
        if(form.pname.length <=6){
            pnameErr = "It is required, Please mention your Parent's Name!"
        }
        if(form.tel.length <=10){
            telErr = "It is required, Please mention your 10 digit number!"
        }
        if(form.city.length <=3){
            cityErr = "It is required, Please mention your City Name!"
        }
        if(form.state.length <=3){
            stateErr = "It is required, Please mention your State Name!"
        }   
    }
        if (nameErr||emailErr||pnameErr||telErr||cityErr||stateErr){
            setErrors({...errors, nameErr, emailErr, pnameErr, telErr, cityErr, stateErr})
            return false;
        }
        else{
            setErrors({...errors, nameErr, emailErr, pnameErr, telErr, cityErr, stateErr}) 
        }
        return true;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const isValid = validate();
        if (isValid){
            // submitToServer();
        }
    }




  return (
    <>
      <div className="container-fluid shadow p-5" id="shodowContainer">
        <h1 className="text-light">
          We are committed to create a world class cricketers for tomorrow!
        </h1>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="p-3 mt-3 bg-light">
              <p className="text-muted">Want to get Admission? Click below button!</p>

              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Get Admission
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        DCCA's Registration Form
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container">
                        <div className="col-12">
                          <form
                            className="card cardBlur p-3"
                            onSubmit={handleSubmit}
                            noValidate
                          >
                            <div>
                              <label htmlFor="textName" className="form-label">
                                Participant's Name
                              </label>
                              <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="textName"
                                onChange={handleChange}
                              />
                              <p className="text-danger">{errors.nameErr}</p>
                            </div>
                            <div>
                              <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                              >
                                Email address
                              </label>
                              <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={handleChange}
                              />
                              <p className="text-danger">{errors.emailErr}</p>
                            </div>
                            <label htmlFor="gender" className="form-label">
                                Gender
                              </label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="gender">
                                <option value="1">Male</option>
                                <option value="2">Fe-Male</option>
                            </select>
                            <div>
                              <label htmlFor="textpName" className="form-label">
                                Parent's Name
                              </label>
                              <input
                                name="pname"
                                type="text"
                                className="form-control"
                                id="textpName"
                                onChange={handleChange}
                              />
                              <p className="text-danger">{errors.pnameErr}</p>
                            </div>
                            <label htmlFor="realtion" className="form-label">
                                Parent's Relation with participant
                              </label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="realtion">
                                <option value="1">Mother</option>
                                <option value="2">Father</option>
                                <option value="2">Gaurdian</option>
                            </select>
                            <div>
                              <label htmlFor="tel" className="form-label">
                                Participant's Contact Number
                              </label>
                              <input
                                name="tel"
                                type="tel"
                                className="form-control"
                                id="tel"
                                onChange={handleChange}
                              />
                              <p className="text-danger">{errors.telErr}</p>
                            </div>
                            <div>
                                <label htmlFor="inputState" className="form-label">State</label>
                                <input name="state" type="text" className="form-control" id="inputState" onChange={handleChange}/>
                                <p className="text-danger">{errors.stateErr}</p>
                            </div>
                            <div>
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input name="city" type="text" className="form-control" id="inputCity" onChange={handleChange}/>
                                <p className="text-danger">{errors.cityErr}</p>
                            </div>
                            <label htmlFor="age" className="form-label">
                                Age
                              </label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="age">
                                <option value="1">5 Yr To 8 Yr</option>
                                <option value="2">9 Yr To 14 Yr</option>
                                <option value="2">15 Yr & Above</option>
                            </select>
                            <label htmlFor="batch" className="form-label">
                                Batch
                              </label>
                            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="batch">
                                <option value="1">Morning Batch</option>
                                <option value="2">Evening Batch</option>
                                <option value="2">Full Day Batch</option>
                            </select>
                            <div className="mt-3 mb-3 form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Check me out
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-light">
                DCCA, the finest cricket academy in Shahada, Dist.
                Nandurbar offers cricket training throughout the year. DCCA offers
                bowling coaching, batting coaching, one on one coaching & more.
                <br />
                <br />
                Having a team of <b>6+</b> coaches and facilities which include
                cutting-edge technologies, analysis software for cricket
                coaching, DCCA also provides accommodation for out station trainees.
              </p>
            </div>
            <hr />
            <div className="mt-3">
              <h5 className="text-light">HOW TO ENROLL?</h5>
              <hr />
              <span className="text-light">
                <b>1. VISIT DCCA</b>
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6452410660518!2d74.4772039140385!3d21.560722674782742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf6d775487a6cd%3A0xf738ce59576d215e!2sDream%20City%20Cricket%20Academy!5e0!3m2!1sen!2sin!4v1628661500771!5m2!1sen!2sin"
                height="150"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
              <br />
              <span className="text-light">
                <b>2. FILL OUT THE ADMISSION FORM</b>
              </span>
              <br />
              <span className="text-light">
                <b>3. AFFIX PHOTO(PASSPORT SIZE)</b>
              </span>
              <br />
              <span className="text-light">
                <b>
                  4. PROVIDE ADDRESS PROOF – PASSPORT &nbsp;&nbsp;&nbsp;&nbsp;OR
                  AADHAAR
                </b>
              </span>
              <br />
              <span className="text-light">
                <b>5. PAY THE FEES AND JOIN!</b>
              </span>
              <br />
              <Link to="/course" style={{ textDecoration: "none" }}>
                <span className="text-warning">
                  <b>CHECK OUT COURSES & FEES DETAILS</b>
                </span>
              </Link>
              <br />
              <span className="text-light" style={{ fontSize: "12px" }}>
                <b>Note:</b> Full fees needs to be paid in advance
              </span>
              <br />
              <span className="text-light">
                CANDIDATES CAN JOIN ANYTIME – WE GIVE ONE FULL YEAR FROM THE
                DATE OF JOINING
              </span>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 p-5">
            <img
              src={cricket}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="facilities">
        <div className="container-fluid card cardBlur">
          <h1 className="text-dark text-center mt-4">
            Facilities! That we provide.
          </h1>
          <p className="mt-4">
            At DCCA, do our best to expose our trainees to very scientific High
            Performance Training programs, along with appropriate tools to help,
            monitor, track and assess progress of our wards.
          </p>
          <hr />
          <ul style={{ listStyleType: "circle" }}>
            <li>Six bowling machines</li>
            <li>
              30 fully covered nets with cement, turf, artificial turf and
              ‘coir’ matting wickets
            </li>
            <li>Two indoor nets</li>
            <li>Quintic video analysis software and digital equipment</li>
            <li>PitchVision Video Analysis System</li>
            <li>Speed check radar</li>
            <li>Flood lights facility for coaching after sunset</li>
            <li>Hostel for out-station trainees</li>
            <li>Transport facilities</li>
            <li>Fitness trainers</li>
            <li>Gym</li>
            <li>Daily Yoga</li>
            <li>Physiotheraphy and psychology classes</li>
            <li>
              Only cricket center in India that operates 365 days & 15 hours a
              day
            </li>
            <li>
              Provides all India tournament experience for under 10, 13, 15, 17,
              19 & seniors
            </li>
            <li>In-house physio-therapists to attend to injuries</li>
            <li>Dedicated and passionate coaching staff</li>
            <li>Foreign coaches from Australia & England</li>
            <li>All modern coaching aids(equipment)</li>
            <li>Audio visual training facility</li>
          </ul>
          <p className="t1">
            <Link to="/contact" style={{ color: "navy" }}>
              Contact
            </Link>
            , DCCA office to know more about the training sessions and any other
            information related to the academy.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
