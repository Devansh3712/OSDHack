import React from 'react'
const Dcard = (props) => {
    let { name, sinceyear, city, fee, medium } = props;
    return (

        <div className="card" style={{ width: "18rem", height: "200px", margin: "30px" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ margin: "10px" }}><b>{name}</b></h5>
                <b>Since Year:- </b><span className="card-text">{sinceyear}</span><br />
                <b>City:- </b><span className="card-text">{city}</span><br />
                <b>Fee:- </b><span className="card-text">{fee}</span><br />
                <b>Medium:- </b><span className="card-text">{medium}</span><br />
            </div>
        </div>
    )
}
export default Dcard