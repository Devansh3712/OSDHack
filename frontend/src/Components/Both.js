import React, { Component } from 'react'
import Scard from './Scard'
export class Both extends Component {
    support = [
        {
            "name": "Conflict and Emotional Management Group",
            "city": "Delhi",
            "type": "PAID",
            "meets": "Weekly",
            "medium": "both"
        },
        {
            "name": "WeSurvive",
            "city": "Mumbai",
            "type": "FREE",
            "meets": "Once a month",
            "medium": "both"
        },
        {
            "name": "Umang",
            "city": "Mumbai",
            "type": "FREE",
            "meets": "Once a month",
            "medium": "both"
        },
        {
            "name": "All Sorts of Queer",
            "city": "Bengaluru",
            "type": "FREE",
            "meets": "Last Saturday and Second Wednesday",
            "medium": "both"
        },
        {
            "name": "Lets Discuss the Meh",
            "city": "Bengaluru",
            "type": "FREE",
            "meets": "Weekly",
            "medium": "both"
        },
        {
            "name": "Warmly US",
            "city": "Bengaluru",
            "type": "PAID",
            "meets": "Monthly",
            "medium": "offline"
        }
    ]
    constructor() {
        super();
        this.state = { support: this.support }
    }
    render() {
        return (
            <div className='container my-3 mx-auto' style={{ width: "auto" }}>
                <div className="row">
                    {this.state.support.map((element, index) => {
                        return <div className="col-md-4" key={index}>
                            <Scard name={element.name ? element.name.slice(0, 45) : ""} city={element.city} type={element.type} meets={element.meets} medium={element.medium} />
                        </div>

                    })}
                </div>
            </div>
        )
    }
}
export default Both