import React, { Component } from 'react'
import Dcard from './Dcard'
export class Delhi extends Component {
    therapist = [
        {
            "name": "Arushi Ralli",
            "since_year": 6,
            "city": "Delhi",
            "fee": 2500,
            "medium": "online"
        },
        {
            "name": "Ramni Kaushik",
            "since_year": 5,
            "city": "Delhi",
            "fee": 1800,
            "medium": "online"
        },
        {
            "name": "Utkarsha Jagga",
            "since_year": 3,
            "city": "Delhi",
            "fee": 2000,
            "medium": "online"
        },
        {
            "name": "Apoorva Gupta",
            "since_year": 1,
            "city": "Delhi",
            "fee": 1200,
            "medium": "online"
        },
        {
            "name": "Shaira Kohli",
            "since_year": 4,
            "city": "Delhi",
            "fee": 1400,
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
export default Delhi