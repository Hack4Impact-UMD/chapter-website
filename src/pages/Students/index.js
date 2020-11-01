import React from 'react';
import Events from "./Events.js";
import FAQItem from "./FAQItem.js";
import TimelineItem from '../../components/TimelineItem';
import classes from './styles.module.css';

const timelineItems = [
    {
        head: "hello testing",
        timePeriod: "hello testing",
        description: "hello testing"
    },
    {
        head: "hello testing",
        timePeriod: "hello testing",
        description: "hello testing"
    },
    {
        head: "hello testing",
        timePeriod: "hello testing",
        description: "hello testing"
    }
]

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
            <section>
                <div>
                    <h1>
                        Students
                    </h1>
                </div>
                <div className={classes.studentContainer}>
                    <div className={classes.centerContainer}>
                    {/* <span className={classes.centerContainerHead}><h1>Students</h1></span> */}
                    <div className={classes.centerContainerText}>
                        <p className={classes.head1}>Students</p>
                        <p>We strive to both prepare students for socially consious roles in tech   while creating a supportive community. Here are some fun events we hold   for our members and our application information.</p>
                    </div>
                    </div>
                    <div>
                        {timelineItems.map((item, i) => (<TimelineItem head={item.head} timePeriod={item.timePeriod} description={item.description} />))}
                    </div>
                    <div className={classes.topBigCircle}></div>
                    <section style={{zIndex:2}}>
                        <br/>
                        <Events/>
                        <br/>
                        <h1>Frequently Asked Questions</h1>
                        <div class="faq-list">
                            <FAQItem question = "What types of roles can students have?" answer = {FAQAnswers[0]} />
                            <FAQItem question = "How much of a time commitment is Hack4Impact?" answer = {FAQAnswers[1]} />
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}
export default Students;