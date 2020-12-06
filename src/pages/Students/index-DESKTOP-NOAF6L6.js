import React from 'react';
import TimelineItem from './TimelineItem';
import Events from "./Events.js";
import FAQItem from "../../components/FAQItem.js";
import faq_styles from "../../components/FAQItem.module.css";
import classes from './styles.module.css';

const str = "a Google Form";
const newMemberApplicationHyperlink = str.link("https://forms.gle/1FrM2JdU1boC4KMz7");

const timelineItems = [
    {
        head: "Written Application",
        timePeriod: "Weeks -2 to 2 of the fall semester and Weeks 1 - 2 of January",
        description: "We accept written applications at the start of the fall semester and a few weeks before the start of the spring semester.\
         Written Applications via the 'apply' button below are open from three weeks before the start of the semester to the first two weeks of the semester.\
         If you want to chat with us in person or have any questions, you can come see us at the First or Second Look Fairs or send us an email."
    },
    {
        head: "Interview",
        timePeriod: "Weeks 1 to 3 of the Fall Semester and Weeks 2 - 3 of January",
        description: "We will reach out to schedule an interview if your interests and skills match what we are looking for. Don't stress about your interview! We want to get to know you and why you're passionate about joining H4I and our mission. If you are applying for a developer position, we may ask technical questions, but we encourage everyone to apply regardless of experience level."
    },
    {
        head: "Notified of Decision",
        timePeriod: "Weeks 2 to 3 of the Fall Semester and Weeks 3 - 4 of January",
        description: "We will email you when we have reached a decision on your application. Unfortunately, we are not able to accept every student who applies. The number of students in our club is determined by the number of nonprofit projects we take on for the year. However, we are taking on more and more projects and growing the number of students and positions every year."
    }
];

/* Function that turns newline escape character ('\n') into paragraph html so that it works */
function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
}

/* 
 * List of questions for FAQ section.
 * each question should correspond to the answer list item at the same index as the question
 * 
 * I'm assuming all question entered in here will have an answer
 */
const FAQQuestions = [
    "What types of roles can students have?",

    "How much of a time commitment is Hack4Impact?",

    "Should students know any programming languages before applying?",

    "What stack do you use?"
]

const FAQAnswers = [
    "We are currently recruiting for software developers, product managers, and designers on the project teams. We are also looking for people interested in marketing, finance, and nonprofit sourcing.",

    "Monthly GBMs for tech + social good talks, ethical software discussions, project demos, and more fun (1 hour per month)\n" + 
    "Weekly meetings with your project team (1 hour per week)\n" +
    "Work on the projects in your own time (2 to 3 hours)\n" +
    "Placed on project teams with nonprofit OR bootcamp team, depending on experience\n" +
    "Leadership roles, such as executive directors, project managers, and tech leads will spend more time, up to 10 hours a week.",

    "It is not required to know any specific languages, but we do require students who are applying " +
     "to become developers or product managers to have taken CMSC 131 or have basic programming skills " +
     "(classes, arrays, maps, etc.) already. General web development skills like HTML, CSS, and JavaScript " +
     "are also good to know. People with less programming and web development experience will be placed in the " +
     "bootcamp group, which will allow you to get to know other people in Hack4Impact and improve your web development skills.",

     "We mainly develop new projects on the MERN (MongoDB, Express.js, React, and Node.js) stack. However, we will also help out " +
     "nonprofit organizations that have existing websites on other stacks, such as Django, Flask, or Ruby on Rails."
]
class Students extends React.Component{

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={classes.studentContainer}>
                <div className={classes.centerContainer}>
                <div className={classes.centerContainerText}>
                    <p className={classes.head1}>Students</p>
                    <p>We strive to both prepare students for socially conscious roles in tech while creating a supportive community. Here are some fun events we hold for our members and our application information.</p>
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
                    {FAQQuestions.map((item, i) => {
                        return (
                            <FAQItem question = {item} answer = {FAQAnswers[i].includes("\n") ? <NewlineText text={FAQAnswers[i]}/> : FAQAnswers[i]} />
                        );
                        }
                    )}
                    </div>
                </section>
            </div>
        </div>
        )
    }
}
export default Students;