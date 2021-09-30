import React, { useEffect, useState } from 'react'
import "./Landing.css"
import Illustration from "../../images/illus.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Landing = () => {

    const [isSignUp,setIsSignUp] = useState(false);
    const [Id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const notify = (text,type) => 
    {
        if(type === "warn")
        {
                    toast.warn(text, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
        }
        else if(type === "error")
        {
            toast.error(text, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else
        {
            toast.success(text, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    const handleSignIn = () => {
        if(isSignUp)
        {
            if(Id === "" || password === "" || confirmPassword === "")
            {
                notify("Input Field Should Not Be Empty","warn")
            }
            else if(password !== confirmPassword)
            {
                notify("Password Do Not Match","error")
            }
            else
            {
                notify("Account Successfully Created","Success");
                setId("");
                setPassword("");
                setConfirmPassword("");
            }
        }
        else
        {
            if(Id === "" || password === "")
            {
                notify("Input Field Should Not Be Empty","warn")
            }
            else
            {
                notify("Successfully Logged In","Success");
                setId("");
                setPassword("");
                setConfirmPassword("");
            }
        }
    }

    useEffect(() => {
            setId("");
            setPassword("");
            setConfirmPassword("");
    },[isSignUp])

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
                                        <input className="input-field" placeholder="Enter Your Account ID" type="email" value={Id} onChange={(e) => setId(e.target.value)}/>
                                    </div>
                                    <div className="input-container">
                                        <label className="label">Password</label>
                                        <br/>
                                        <input className="input-field" placeholder="Enter Your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="input-container">
                                        <label className="label">Confirm Password</label>
                                        <br/>
                                        <input className="input-field" placeholder="Enter Your Password Again" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    </div>
                                </> 
                                :
                                <>
                                    <div className="input-container">
                                        <label className="label">Account ID</label>
                                        <br/>
                                        <input className="input-field" placeholder="Enter Your Account ID" type="email" value={Id} onChange={(e) => setId(e.target.value)}/>
                                    </div>
                                    <div className="input-container">
                                    <label className="label">Password</label>
                                    <br/>
                                    <input className="input-field" placeholder="Enter Your Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                            <button onClick={handleSignIn}>
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
            <ToastContainer />
        </div>
    )
}

export default Landing
