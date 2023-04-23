import React, { Component } from 'react'
import Dcard from './Dcard'
export class Bengaluru extends Component {
    therapist = [
        {
            "name": "Radhika Bhat",
            "since_year": 7,
            "city": "Bengaluru",
            "fee": 1800,
            "medium": "online"
        },
        {
            "name": "Mohana Baidya",
            "since_year": 5,
            "city": "Bengaluru",
            "fee": 2500,
            "medium": "online"
        },
        {
            "name": "Jyothi John",
            "since_year": 11,
            "city": "Bengaluru",
            "fee": 2500,
            "medium": "both"
        },
        {
            "name": "Sukriti Dua",
            "since_year": 6,
            "city": "Bengaluru",
            "fee": 2000,
            "medium": "online"
        },
        {
            "name": "Pratyusha DV",
            "since_year": 3,
            "city": "Bengaluru",
            "fee": 3000,
            "medium": "both"
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
export default Bengaluru;