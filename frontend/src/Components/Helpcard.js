import React from 'react'
const Helpcard = (props) => {
    let { title, description, contact, email } = props;
    return (

        <div className="card" style={{ width: "20rem", height: "500px", margin: "30px" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ margin: "10px" }}><b>{title}</b></h5>
                <b>Description:- </b><p className="card-text">{description}</p>
                <b>Contact:- </b><p className="card-text">{contact}</p>
                <b>Email:- </b><p className="card-text">{email}</p>
            </div>
        </div>
    )
}
export default Helpcard