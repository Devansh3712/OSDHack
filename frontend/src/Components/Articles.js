import React, { Component } from 'react'
import Card from './Card'
export class Articles extends Component {
    articles = [

        {
            "title": "Generalised Anxiety Disorder",
            "Symptoms": "Restlessness, Fatigue, Irratability, Difficulty sleeping, Impaired concentration",
            "Details": "Generalised anxiety is excessive anxiety and constant worry about many things. The focus of the anxiety might be family or friends, health, work, money or forgetting important appointments.",
            "img": "https://uniquemindcare.com/wp-content/uploads/2020/01/cbd-and-anxiety.png"
        },
        {
            "title": "Social Phobia",
            "Symptoms": "Blushing, Feeling of mind going blank, Muscle Tension, Quickened Heartbeat, Upset Stomach, Trembling, Dizziness",
            "Details": "Social phobia is a type of anxiety disorder. People who have social phobia experience extreme and persistent anxiety associated with social or performance situations.",
            "img": "https://thumbs.dreamstime.com/b/social-anxiety-pho…ion-man-feeling-uncomfortable-crowd-144986838.jpg"
        },
        {
            "title": "Panic Disorders",
            "Symptoms": "Trembling, Numbness, Hyperventilation, Heart Palpitations, Chills or Hot flashes",
            "Details": "Panic disorder is an anxiety disorder where you regularly have sudden attacks of panic or fear. Everyone experiences feelings of anxiety and panic at certain times. It's a natural response to stressful or dangerous situations.",
            "img": "https://minddoc.de/wp-content/uploads/2022/08/minddoc-online-therapy-app-panic-attack.png"
        },
        {
            "title": "Obsessive compulsive disorder",
            "Symptoms": "Organization, Perfectionism, Attention to detail, Frequent list making, Rigidity, Devotion to work, Social Isolation",
            "Details": "Obsessive-compulsive disorder (OCD) is a common, chronic, and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts.",
            "img": "https://www.thestatesman.com/wp-content/uploads/2022/06/iStock-1316635235.jpg"
        },
        {
            "title": "Post-traumatic stress disorder (PTSD)",
            "Symptoms": "Fear, Inablity to bounce back and trust others, Inpulsivity, Depression, Constant Anger, Daydreaming, Shutting Down",
            "Details": "Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event.",
            "img": "https://www.teachermagazine.com/assets/images/teacher/Understanding-PTSD.jpg"
        },
        {
            "title": "Oppositional defiant disorder (ODD)",
            "Symptoms": "Losing Temper, Frequent Outbursts, Frequently disrespectful, Argumentive, Defiant behavior, Spiteful, Seeking Revenge",
            "Details": "Even the best-behaved children can be difficult and challenging at times. But oppositional defiant disorder (ODD) includes a frequent and ongoing pattern of anger, irritability, arguing and defiance toward parents and other authority figures.",
            "img": "https://mind.help/wp-content/uploads/2023/01/Oppositional-Defiant-Disorder.jpg"
        },
        {
            "title": "Conduct disorder (CD)",
            "Symptoms": "Initiates Physicial Fights, Using weapons, Harming people and animals, Bullying others",
            "Details": "Conduct Disorder (CD) is diagnosed when children show an ongoing pattern of aggression toward others, and serious violations of rules and social norms at home, in school, and with peers.",
            "img": "https://nhatamlyhoc.com/wp-content/uploads/2020/01/Conduct-disorder-1-1024x576.jpg"
        },
        {
            "title": "Depression",
            "Symptoms": "Anxiety, Hopelessness, Mode Swings, Change in body weight, Feel low, Sucidial Tendancy",
            "Details": "Depression is a mood disorder characterised by lowering of mood, loss of interest and enjoyment, and reduced energy. It is not just feeling sad.",
            "img": "https://domf5oio6qrcr.cloudfront.net/medialibrary/7813/a83db567-4c93-4ad0-af6f-72b57af7675d.jpg"
        },
        {
            "title": "Paranoia",
            "Symptoms": "Increased Isolation, Mistrust of others, Hypervigilance, Stubborness, Hostility",
            "Details": "Paranoia is the irrational and persistent feeling that people are ‘out to get you’. Paranoia may be a symptom of conditions including paranoid personality disorderer.",
            "img": "https://img.freepik.com/free-vector/paranoia-concept-illustration_114360-8057.jpg?w=2000"
        },
        {
            "title": "Psychosis",
            "Symptoms": "Delusions, Suspiciousness, Sleep Difficulties, Social Withdrawal, Hallucinations",
            "Details": "Psychosis refers to a collection of symptoms that affect the mind, where there has been some loss of contact with reality.",
            "img": "https://depressionals.com/wp-content/uploads/2021/09/Psychotic-Disorder.webp"
        },


    ]
    constructor() {
        super();
        this.state = { articles: this.articles }
    }
    render() {
        return (
            <div className='container my-3 mx-auto' style={{ width: "auto" }}>
                <div className="row">
                    {this.state.articles.map((element, index) => {
                        return <div className="col-md-4" key={index}>
                            <Card title={element.title ? element.title.slice(0, 45) : ""} symptoms={element.Symptoms} details={element.Details} img={element.img ? element.img : ""} />
                        </div>

                    })}
                </div>
            </div>
        )
    }
}

export default Articles;