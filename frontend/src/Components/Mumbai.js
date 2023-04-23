import React, { Component } from 'react'
import Dcard from './Dcard'
export class Mumbai extends Component {
    therapist = [
        {
            "name": "Devika Kapoor",
            "since_year": 6,
            "city": "Mumbai",
            "fee": 1200,
            "medium": "both"
        },
        {
            "name": "Kajal Makwana",
            "since_year": 4,
            "city": "Mumbai",
            "fee": 2500,
            "medium": "both"
        },
        {
            "name": "Megha Mawandiya",
            "since_year": 7,
            "city": "Mumbai",
            "fee": 4000,
            "medium": "both"
        },
        {
            "name": "Vidhya Vijay",
            "since_year": 3,
            "city": "Mumbai",
            "fee": 2000,
            "medium": "online"
        },
        {
            "name": "Aditi Shah",
            "since_year": 7,
            "city": "Mumbai",
            "fee": 3500,
            "medium": "offline"
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
export default Mumbai