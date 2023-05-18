import React from "react";
import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {

    return (
        <div className="register">
            <div className="card">
                <div className="right">
                    <h1>Quaint.</h1>
                    <p>
                    Welcome to Quaint! Embrace simplicity, connect with like-minded individuals, and embark on a minimalist journey towards a more intentional and fulfilling life. 
                    </p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="left">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <input type="text" placeholder="Name"/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Register