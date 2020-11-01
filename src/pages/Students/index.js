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
                            <FAQItem question = "Question 1" answer = "Answer 1" />
                            <FAQItem question = "Question 2" answer = "Answer 2" />
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}
export default Students;