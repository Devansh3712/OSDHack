import React, { Component } from 'react'
import Scard from './Scard'
export class Online extends Component {
    support = [
        {
            "name": "Express",
            "city": null,
            "type": "PAID",
            "meets": "Once a month on saturday",
            "medium": "online"
        },
        {
            "name": "Shades of the Meh",
            "city": null,
            "type": "FREE",
            "meets": "Weekly. 1st and last Wednesday of the month",
            "medium": "online"
        },
        {
            "name": "Knit your own tale",
            "city": null,
            "type": "PAID",
            "meets": "Weekly",
            "medium": "online"
        },
        {
            "name": "Knit your own tale",
            "city": null,
            "type": "PAID",
            "meets": "Weekly",
            "medium": "online"
        },
        {
            "name": "Group for persons with PCOS",
            "city": null,
            "type": "PAID",
            "meets": "Weekly",
            "medium": "online"
        },
        {
            "name": "Empowered Empaths",
            "city": null,
            "type": "PAID",
            "meets": "Twice a month, Flexible days",
            "medium": "online"
        },
        {
            "name": "ASHA Against CSA",
            "city": "Delhi",
            "type": "FREE",
            "meets": "Mothly",
            "medium": "online"
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
export default Online