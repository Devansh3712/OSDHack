import React from 'react'
const Scard = (props) => {
    let { name, city, type, meets, medium } = props;
    return (

        <div className="card" style={{ width: "18rem", height: "200px", margin: "30px" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ margin: "10px" }}><b>{name}</b></h5>
                <b>City:- </b><span className="card-text">{city}</span><br />
                <b>Type:- </b><span className="card-text">{type}</span><br />
                <b>Meets:- </b><span className="card-text">{meets}</span><br />
                <b>Medium:- </b><span className="card-text">{medium}</span><br />
            </div>
        </div>
    )
}
export default Scard