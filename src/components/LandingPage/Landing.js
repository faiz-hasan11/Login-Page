import React, { useState } from 'react'
import "./Landing.css"
import Google from "../../images/google.png"
import Facebook from "../../images/facebook.png"
import Illustration from "../../images/Illustration.jpg"
const Landing = () => {

    const [isSignUp,setIsSignUp] = useState(false)

    return (
        <div className="container">
            <div className="subcontainer">
                <div className="left-container">
                    <h1 className="title">
                        {
                            isSignUp ? "Sign Up" : "Sign In"
                        }
                    </h1>
                    {
                        isSignUp ? 
                            <>
                                <div className="input-container">
                                    <label className="label">Email</label>
                                    <br/>
                                    <input className="input-field" placeholder="Enter Your Email" type="email"/>
                                </div>
                                <div className="input-container">
                                    <label className="label">Password</label>
                                    <br/>
                                    <input className="input-field" placeholder="Enter Your Password" type="password"/>
                                </div>
                                <div className="input-container">
                                    <label className="label">Confirm Password</label>
                                    <br/>
                                    <input className="input-field" placeholder="Enter Your Password Again" type="password"/>
                                </div>
                            </> 
                            :
                            <>
                                <div className="input-container">
                                    <label className="label">Email</label>
                                    <br/>
                                    <input className="input-field" placeholder="Enter Your Email" type="email"/>
                                </div>
                                <div className="input-container">
                                <label className="label">Password</label>
                                <br/>
                                <input className="input-field" placeholder="Enter Your Password" type="password"/>
                                </div>
                            </> 
                    }
                    {
                        !isSignUp &&
                            <div className="forgot">
                                <p>Forgot your password?</p>
                            </div>
                    }
                    <div className="btn-container">
                        <button>
                            {
                                isSignUp ? "Sign Up" : "Sign In"
                            }
                        </button>
                    </div>
                    <div className="or-container">
                        <p>Or</p>
                    </div>
                    <div className="social-container">
                        <div className="social-single-container">
                            <img src={Google}/>
                            <p>Google</p>
                        </div>
                        <div className="social-single-container">
                            <img src={Facebook}/>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className="create-Acc">
                        <p>
                            {
                            isSignUp ? "Already Have An Account?" : "Dont Have An Account?"
                            }
                        </p>
                    </div>
                    <div className="btn-container2">
                        <button onClick={() => setIsSignUp(!isSignUp)}>
                            {
                            isSignUp ? "Sign In to Account" : "Create Account"
                            }
                        </button>
                    </div>
                </div>
                <div className="right-container">
                    <img src={Illustration}/>
                </div>
            </div>
        </div>
    )
}

export default Landing
