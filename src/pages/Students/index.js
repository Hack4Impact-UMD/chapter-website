import React from 'react';
import TimelineItem from './TimelineItem';
import Events from "./Events.js";
import FAQItem from "../../components/FAQItem.js";
import faq_styles from "../../components/FAQItem.module.css";
import classes from './styles.module.css';

const timelineItems = [
    {
        head: "Written Application",
        timePeriod: "Fall Quarter Weeks 1-3",
        description: "We accept written applications every year at the start of Fall Quarter. We have positions open for developers, PM's, and designers, so you can indicate your position preferences here. If you want to chat in person or have questions, come see us at the WOW Club Showcase or send us an email."
    },
    {
        head: "Interview",
        timePeriod: "Fall Quarter Weeks 2-4",
        description: "We will reach out to schedule an interview if your interests and skills match what we are looking for. Don't stress about your interview! We want to get to know you and why you're passionate about joining H4I and our mission. If you are applying for a developer position, we may ask technical questions, but we encourage everyone to apply regardless of experience level."
    },
    {
        head: "Notified of Decision",
        timePeriod: "Mid Fall Quarter",
        description: "We will email you when we have reached a decision on your application. Unfortunately, we are not able to accept every student who applies. The number of students in our club is determined by the number of nonprofit projects we take on for the year. However, we are taking on more and more projects and growing the number of students and positions every year."
    }
];

const FAQAnswers = [
    "We recruit for software developers, product managers, and designers. On each nonprofit " +
    "project team, we have around 4-5 developers, 1-2 product managers, and 1-2 designers. If there " +
    "is a role that we don't currently offer and that interests you, let us know! We want our members " +
    "to be passionate about their work and are always looking to make our project teams stronger.",

    "Monthly GBMs for tech + social good talks, ethical software discussions, project demos, and more fun (1 hour per month)\n" + 
    "Weekly meetings with your project team (1 hour per week)\n" +
    "Work on the projects in your own time (2 to 3 hours)\n" +
    "Placed on project teams with nonprofit OR bootcamp team, depending on experience\n" +
    "Leadership roles, such as executive directors, project managers, and tech leads will spend more time, up to 10 hours a week."
]
class Students extends React.Component{

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={classes.studentContainer}>
                <div className={classes.centerContainer}>
                {/* <span className={classes.centerContainerHead}><h1>Students</h1></span> */}
                <div className={classes.centerContainerText}>
                    <p className={classes.head1}>Students</p>
                    <p>We strive to both prepare students for socially consious roles in tech   while creating a supportive community. Here are some fun events we hold   for our members and our application information.</p>
                </div>
                </div>
                <p className={`${classes.head2} ${classes.timelineHead}`}>Application Process</p>
                <div className={classes.timelineContainer}>
                    {timelineItems.map((item, i) => {
                        return (
                            <TimelineItem head={item.head} timePeriod={item.timePeriod} description={item.description} />
                        );
                        }
                    )}
                </div>
                <div className={classes.topBigCircle}></div>
                <div className={classes.cta}>
                    <a className={classes.ctaButton} href = "https://forms.gle/1FrM2JdU1boC4KMz7" target="_blank">Apply Now</a>
                </div>

            <div>
                <section style={{zIndex:2, paddingBottom:"3em"}}>
                    <br/>
                    <Events/>
                    <br/>
                    <h1>Frequently Asked Questions</h1>
                    <div className = {faq_styles.faq_list}>
                        <FAQItem question = "What types of roles can students have?" answer = {FAQAnswers[0]} />
                        <FAQItem question = "How much of a time commitment is Hack4Impact?" answer = {FAQAnswers[1]} />
                    </div>
                </section>
            </div>
        </div>
        )
    }
}
export default Students;