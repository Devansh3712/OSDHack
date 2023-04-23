import React from 'react'
// import { Link } from 'react-router-dom'
const Card = (props) => {
    let { title, symptoms, details, img } = props;
    return (

        <div className="card" style={{ width: "24rem", height: "600px", margin: "10px" }}>
            <img src={img} style={{ height: "220px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{ margin: "10px" }}><b>{title}</b></h5>
                <b className="sub-head">Symptoms:- </b><p className="card-text">{symptoms}</p>
                <b className="sub-head">Details:- </b><p className="card-text">{details}</p>
            </div>
        </div>
    )
}
export default Card