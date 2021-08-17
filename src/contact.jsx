import { useState } from "react";
import { Link } from "react-router-dom";
import bhishe from "./image/bhishe.jpg"

let Contact = () =>{

    const [form, setForm] = useState({
        name: "",
        email : "",
        subject : ""
    })
    const [errors, setErrors] = useState({
        nameErr : '',
        emailErr :'',
        subjectErr :''
    })
    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const validate = () =>{
        let nameErr = '';
        let emailErr = '';
        let subjectErr = '';

        if(form.name.length <=6){
            nameErr = "It is required, Please mention your Full Name!"
        }
        if (!form.email.includes('@gmail.com')){
            emailErr = "Enter an valid email!"
        }
        if(form.subject.length <= 8){
            subjectErr = "It is required, Please mention your subject! "
        }
        if (nameErr||emailErr||subjectErr){
            setErrors({...errors, nameErr, emailErr, subjectErr})
            return false;
        }
        else{
            setErrors({...errors, nameErr, emailErr, subjectErr}) 
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


    return(
        <>
            <div className="container-fluid">
                <div className="col-12">
                    <h2 className="text-center text-primary p-2">CONTACT US</h2>
                </div>
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <div className="mt-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6452410660518!2d74.4772039140385!3d21.560722674782742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf6d775487a6cd%3A0xf738ce59576d215e!2sDream%20City%20Cricket%20Academy!5e0!3m2!1sen!2sin!4v1628661500771!5m2!1sen!2sin" height="500" style={{border:"0", width:"100%"}} loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                        <div className="mt-3">
                            <h4 className="text-dark"><b>Exclusive Offer</b></h4>
                            <hr />
                        </div>
                        <div className="card cardBlur p-2">
                            <p>
                            Get an 30% off on your first 3 month fees!
                            <br />
                            <Link style={{textAlign:"center"}} to="/offer"><small>Who doesn't like an offer?</small></Link>
                            </p>
                        </div>
                        <div className="mt-3">
                            <img src={bhishe} height="315" style={{width:"100%"}} alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center card cardBlur p-3 mt-3">
                    <big>DREAM CITY CRICKET ACADEMY</big>
                    <br />
                    <small className="text-muted">DCCA, OPERATES SEVEN DAYS A WEEK from 06:00 TO 21:00.</small>
                    <br />
                    <b>MALONI:</b>
                    <br />
                    <span className="text-primary">Behind Reshmai Naturopathy,<br /> Khetiya Road, Dream City Society, Maloni, Shahada, Maharashtra, 425409,<br /> Mob: +919403080104, +918668261315, +919767084719</span>
                </div>
                <form className="card cardBlur p-5 mt-5"onSubmit={handleSubmit} noValidate>
                    <div className="col-12 mb-5">
                        <h2 className="text-center">Get In Touch</h2>
                        <hr />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="textName" className="form-label">Full Name</label>
                        <input name="name"  type="text" className="form-control" id="textName" onChange={handleChange}/>
                        <p className="text-danger">{errors.nameErr}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email"  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                        <p className="text-danger">{errors.emailErr}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="textSubject" className="form-label">Subject</label>
                        <input name="subject"  type="text" className="form-control" id="textSubject" onChange={handleChange}/>
                        <p className="text-danger">{errors.subjectErr}</p>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="2"></textarea>
                        <label htmlFor="floatingTextarea"><small>Tell us! What you think about DCCA?</small></label>
                    </div>
                    <div className="mt-3 mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
export default Contact;