import React, { useState } from 'react'
import "./Landing.css"
import Illustration from "../../images/illus.png"
const Landing = () => {

    const [isSignUp,setIsSignUp] = useState(false)

    return (
        <div className="container">
            <div className="subcontainer">
                <div className="left-container">
                    <div className="left-sub-container">
                            <h1 className="title">
                            {
                                isSignUp ? "Sign Up" : "Sign In"
                            }
                        </h1>
                        {
                            isSignUp ? 
                                <>
                                    <div className="input-container">
                                        <label className="label">Account ID</label>
                                        <br/>
                                        <input className="input-field" placeholder="Enter Your Account ID" type="email"/>
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
                                        <label className="label">Account ID</label>
                                        <br/>
                                        <input className="input-field" placeholder="Enter Your Account ID" type="email"/>
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
                    <img 
                        src={Illustration}
                        alt="Illustration"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Landing
