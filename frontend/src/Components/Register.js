import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const registerUser = async (e) => {
        const name = document.getElementById("input-name").value;
        const email = document.getElementById("input-email").value;
        const password = document.getElementById("input-password").value;
        await fetch("http://localhost:8000/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    return fetch("http://localhost:8000/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        })
                    });
                }
            })
            .then((token) => token.json())
            .then((data) => {
               document.cookie = `token=${data.token}; path=/`;
            })
    }
    return (
        <div className="ctr" >
            <div className="card ctr" style={{ width: "400px", margin: "auto" }}>
                <img src="https://ca-times.brightspotcdn.com/dims4/default/bb60523/2147483647/strip/true/crop/2000x1333+0+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2Fb7%2F99beae9a4be0bbced1487b04b619%2Fla-hm-nyny-mental-health.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">CREATE ACCOUNT</h5>
                    <div className="inp"><input className="input" type="Name" id="input-name" placeholder='Enter your name' /></div>
                    <div className="inp"><input className="input" type="email" id="input-email" placeholder='Enter your email' /></div>
                    <div className="inp"> <input className="input" type="password" id="input-password" placeholder='Enter your password' /></div>
                    <Link to="/" className="btn btn-primary" onClick={registerUser}>REGISTER</Link>
                </div>
            </div>
        </div>
    )
}
export default Register;