import React, { useState } from 'react'
import mountain from './images/mountain-img.png'
import whitecat from './images/white-cat.png'

import { Link } from 'react-router-dom'
const Landing = () => {

    return (
        <>
                <img className="white-cat" src={whitecat} alt="white-cat" />
            <div className="qt">
                <p></p>
            </div>
            <div>
                <h3 className="poem">"It is okay to cry sometimes,<br />Sometimes, it is okay to yell,<br />As long as you don't keep everything inside,<br />Sometimes it is okay to be sad as well."<br />~b.a.</h3>
                <h2>hi, buddy!</h2>
                <h4>what are you looking for today?</h4>
                <div className="btu" style={{ display: "flex" }}>
                    <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="/addjournal">Add Journal</Link></button>
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
            <br /> <br />
            <div>
                <h2>we've got some tests for you...</h2>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/depression/?ref">Depression Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/anxiety/?ref">Anxiety Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/psychosis/?ref">Psychosis & Schizophrenia Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/ptsd/?ref">PTSD Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/eating-disorder/?ref">Eating Disorder Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/addiction/?ref">Addiction Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/parent/?ref">Parent Test: Your Child’s Mental Health</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/bipolar/?ref">Bipolar Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/youth/?ref">Youth Mental Health Test</Link></button>
                <button style={{ margin: "20px" }} type="button" class="btn btn-info"><Link className="test" to="https://screening.mhanational.org/screening-tools/adhd/?ref">Attention Deficient Hyperactivity Disorder</Link></button>



            </div>
        </>
    )
}
export default Landing;