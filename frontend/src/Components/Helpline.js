import React, { Component } from 'react'
import Helpcard from './Helpcard'
export class Helpline extends Component {
    helpline = [
        {
            "title": "Mitram Foundation",
            "Description": "Mitram Foundation is a suicide prevention helpline that aims to offer emotional support to those going through a crisis in their lives, especially the distressed, depressed and suicidal.",
            "Contact": "080 2572 2573, +91 901 9708133",
            "Email": "share@mitramfoundation.org"
        },
        {
            "title": "Arpita Suicide Prevention Helpline",
            "Description": "Arpita Suicide Prevention Helpline located at Ramaiah Hospital is one of the services of Arpita Foundation, started in 2019 by a group of Experienced Volunteers from various Institutions to reach out in Society.",
            "Contact": "080-23655557",
            "Email": "arpita.helpline@gmail.com"
        },
        {
            "title": "Vandrevala Foundation",
            "Description": "Cyrus & Priya Vandrevala Foundation is a non-profit organisation that aims to provide significant funding and aid contributions for those suffering from mental health problems and illnesses in India.",
            "Contact": "9999 666 555, +1(256)6662142",
            "Email": "help@vandrevalafoundation.com"
        },
        {
            "title": "Parivarthan",
            "Description": "Parivarthan Counselling, Training and Research Centre is a registered, non-profit society that provides multimodal services in the field of mental health(www.parivarthan.org). The Helpline is serviced by trained, professional counsellors who are committed to a rigorously ethical practice and who respect the confidentiality of the callers.",
            "Contact": "+91-7676602602",
            "Email": "help@parivarthan.com"
        },
        {
            "title": "iCALL",
            "Description": "iCALL is a psychosocial helpline for individuals in emotional and psychological distress. They provide professional and free counseling through technology assisted mediums such as telephone, email and chat to anyone in need of emotional support, irrespective of age, gender, sexual orientation or race, and transcending geographical distances while ensuring confidentiality.",
            "Contact": " 022-25521111, +91-9152987821",
            "Email": "icall@tiss.edu"
        },
        {
            "title": "Sangath",
            "Description": "Sangath is a not-for-profit organisation working in Goa, India for 24 years to make mental health services accessible and affordable. They have a dedicated COVID 19 well-being centre which offers community support, free tele-counselling and self-management resources for frontline workers and young people in need of psychological support amidst the pandemic.",
            "Contact": "011-41198666",
            "Email": "contactus@sangath.in"
        },
        {
            "title": "Voice That Cares (ROCF)",
            "Description": "Voice That Cares is a free public helpline that provides psychosocial counselling support on a wide range of mental health matters including anxiety, fear, panic attacks, guilt, grief, loneliness, anger, exam stress, pandemic induced psychological issues, stigma, etc.",
            "Contact": "8448-8448-45",
            "Email": "info@rocf.org"
        },
        {
            "title": "Connecting Trust",
            "Description": "Connecting NGO is a non-judgemental, non-advisory, confidential and anonymous space for those feeling low, distressed and/or suicidal.",
            "Contact": "+91-9922001122, +91-9922004305",
            "Email": "distressmailsconnecting@gmail.com"
        },
        {
            "title": "Roshni Trust",
            "Description": "Roshni trust is a voluntary organization that values human life. Roshni helpline comes under its umbrella. Roshni helpline provides free and confidential service by providing emotional support to the depressed and the suicidal, since 20 years. We are situated in Sindhi Colony, Secunderabad.",
            "Contact": "040-66202000, 040-6620200",
            "Email": "roshnihelp@gmail.com"
        },
        {
            "title": "Lifeline",
            "Description": "Lifeline offers a free tele-helpline providing emotional support to people who are in despair, depressed or suicidal. Face to face befriending with prior appointment is also available. The services offered are unconditional, non-judgemental and confidential.",
            "Contact": "033-40447437, +91-9088030303",
            "Email": "lifelinekolkata@gmail.com"
        },

    ]
    constructor() {
        super();
        this.state = { helpline: this.helpline }
    }
    render() {
        return (
            <div className='container my-3 mx-auto' style={{ width: "auto" }}>
                <div className="row">
                    {this.state.helpline.map((element, index) => {
                        return <div className="col-md-4" key={index}>
                            <Helpcard title={element.title ? element.title.slice(0, 45) : ""} description={element.Description} contact={element.Contact} email={element.Email} />
                        </div>

                    })}
                </div>
            </div>
        )
    }
}
export default Helpline