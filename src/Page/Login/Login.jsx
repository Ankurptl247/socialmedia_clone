import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <>
            <div id="login ">
                <div className="card">
                    <div className="left">
                        <h1>Hello World.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                            alias totam numquam ipsa exercitationem dignissimos, error nam,
                            consequatur.
                        </p>
                        <span>Don't you have an account?</span>
                        <Link to="/Register">
                            <button>Register</button>
                        </Link>
                    </div>
                    <div className="right">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
