import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./login.scss"
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Quaint.</h1>
                    <p>
                      Welcome to Quaint, a thriving online community for individuals embracing the beauty of minimalism. 
                      Discover a serene space where you can share ideas, find inspiration, and embark on a transformative 
                      journey towards a simpler, more intentional life. 
                    </p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password"/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login