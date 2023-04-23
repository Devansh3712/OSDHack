import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {

    return (
        <>
            <div className="qt">
                <p></p>
            </div>
            <div>
                <h2>Hello </h2>
                <div className="btu" style={{ display: "flex" }}>
                    <button style={{ margin: "20px" }} type="button" class="btn btn-info">Info</button>
                    <div class="dropdown" style={{ margin: "20px" }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Therapists
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/mumbai">Mumbai</Link></li>
                            <li><Link class="dropdown-item" to="/delhi">Delhi</Link></li>
                            <li><Link class="dropdown-item" to="/bengaluru">Bengaluru</Link></li>
                            <li><Link class="dropdown-item" to="/kolkata">Kolkata</Link></li>
                        </ul>
                    </div>
                    <div class="dropdown" style={{ margin: "20px" }}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Support Groups
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/online">Online</Link></li>
                            <li><Link class="dropdown-item" to="/both">Both</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Landing;