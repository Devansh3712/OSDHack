import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="ctr" >
            <div className="card ctr" style={{ width: "400px", margin: "auto" }}>
                <img src="https://ca-times.brightspotcdn.com/dims4/default/bb60523/2147483647/strip/true/crop/2000x1333+0+0/resize/2000x1333!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8e%2Fb7%2F99beae9a4be0bbced1487b04b619%2Fla-hm-nyny-mental-health.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">LOGIN</h5>
                    <div className="inp"><input className = "input" type="email" placeholder='Enter your email' /></div>
                    <div className="inp"> <input className = "input" type="password" placeholder='Enter your password' /></div>
                    <Link href="/" className="btn btn-primary">LOGIN</Link>
                </div>
            </div>
        </div>
    )
}
export default Login