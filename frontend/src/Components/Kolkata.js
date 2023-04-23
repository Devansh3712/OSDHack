import React, { Component } from 'react'
import Dcard from './Dcard'
export class Kolkata extends Component {
    therapist = [
        {
            "name": "Trishla Kanakia",
            "since_year": 7,
            "city": "Kolkata",
            "fee": 2500,
            "medium": "online"
        },
        {
            "name": "Pavitra Sahay",
            "since_year": 7,
            "city": "Kolkata",
            "fee": 2000,
            "medium": "online"
        },
        {
            "name": "Tanvi Maloo",
            "since_year": 4,
            "city": "Kolkata",
            "fee": 1500,
            "medium": "online"
        },
        {
            "name": "Snechal Saraf",
            "since_year": 4,
            "city": "Kolkata",
            "fee": 5000,
            "medium": "online"
        }
    ]
    constructor() {
        super();
        this.state = { therapist: this.therapist }
    }
    render() {
        return (
            <div className='container my-3 mx-auto' style={{ width: "auto" }}>
                <div className="row">
                    {this.state.therapist.map((element, index) => {
                        return <div className="col-md-4" key={index}>
                            <Dcard name={element.name ? element.name.slice(0, 45) : ""} sinceyear={element.since_year} city={element.city} fee={element.fee} medium={element.medium} />
                        </div>

                    })}
                </div>
            </div>
        )
    }
}
export default Kolkata