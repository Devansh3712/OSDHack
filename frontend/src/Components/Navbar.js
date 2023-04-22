import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <section>
                <nav className="stroke">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Articles</Link></li>
                        <li><Link to="/">Relax</Link></li>
                        <li><Link to="/">For You</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Navbar

