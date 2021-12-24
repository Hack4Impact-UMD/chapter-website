import React from 'react';
import Timeline from './Timeline';
import { Card, CardDeck, Button } from 'react-bootstrap';
import FAQItem from "../../components/FAQItem.js";
import faq_styles from "../../components/FAQItem.module.css";
import classes from './styles.module.css';
import cardImgOne from './eventImages/EducationalCardImg.jpg'
import cardImgTwo from './eventImages/GivingBackCardImg.jpg'
import cardImgThree from './eventImages/SocialCardImg.jpg'


const str = "a Google Form";
const newMemberApplicationHyperlink = str.link("https://forms.gle/1FrM2JdU1boC4KMz7");



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
    "We are currently recruiting for software developers, product managers, and designers on the project teams. "+
    "You will be placed on project teams with nonprofit OR bootcamp team, depending on experience"+
    "We are also looking for people interested in marketing, finance, and nonprofit sourcing.",

    "Monthly GBMs for tech + social good talks, ethical software discussions, project demos, and more fun (1 hour per month)\n" + 
    "Weekly meetings with your project team (1 hour per week)\n" +
    "Work on the projects in your own time (2 to 3 hours)\n" +
    "Leadership roles, such as executive directors, project managers, and tech leads will spend more time, up to 10 hours a week.",

    "It is not required to know any specific languages, but we do require students who are applying " +
     "to become developers or product managers to have taken CMSC 131 or have basic programming skills " +
     "(classes, arrays, maps, etc.) already. General web development skills like HTML, CSS, and JavaScript " +
     "are also good to know. People with less programming and web development experience will be placed in the " +
     "bootcamp group, which will allow you to get to know other people in Hack4Impact and improve your web development skills.",

     "We mainly develop new projects on the MERN (MongoDB, Express.js, React, and Node.js) stack. However, we will also help out " +
     "nonprofit organizations that have existing websites on other stacks, such as Django, Flask, or Ruby on Rails."
]

const EventCards = [
    {
        title : "Educational",

        text : "We start each year off with a bootcamp, which is your " +
        "chance to learn what Hack4Impact UMD is all about! During " +
        "bootcamp, our members attend workshops and get familiar " +
        "with the tools they will use on their project team. Throughout " +
        "the year we also host tech talks and speaker events with professors " +
        "and other professionals.",

        imgUrl : cardImgOne,

        imgAlt : 'Hack4Impact UMD educating!',

    },

    {
        title : "Giving Back",

        text : "We try to learn about our nonprofit partners' missions and work beyond " +
        "our technical projects as well! We volunteer with every nonprofit we " +
        "partner with for the year so that each member learns about their work, " +
        "regardless of their project team.",

        imgUrl : cardImgTwo,

        imgAlt : 'Hack4Impact UMD giving back!',

    },

    {
        title : "Social",

        text : "We love our work because of our amazing members! We host " +
        "social events so that all of our members can get to know " +
        "each other and take a break from their school work. We would like to  " +
        "host game nights, events with other clubs, hikes, " +
        "and a banquet every " +
        "year to celebrate everyone's hard work.",

        imgUrl : cardImgThree,

        imgAlt : 'Hack4Impact UMD socializing!',

    }
]

class Students extends React.Component{

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style = {{marginTop: '6em'}}>
                <div className={classes.centerContainer}>
                <div className={classes.centerContainerText}>
                    <p className={classes.head1}>Students</p>
                    <p>We strive to both prepare students for socially conscious roles in tech while creating a supportive community. Here are some fun events we hold for our members and our application information.</p>
                </div>
                </div>
                <p className={`${classes.head2} ${classes.timelineHead}`}>Application Process</p>
                <Timeline/>
                
                <div className={classes.cta}>
                    <Button variant = "dark" href = "https://forms.gle/qR5d88tLWD6LTBv1A" target="_blank">Apply Now</Button>
                </div>

            <div>
                <section style={{paddingBottom:"3em", marginLeft: "5em", marginRight: "5em"}}>
                <section>
                    <br/>
                    <h1>Events</h1>
                    <br/>
                    <CardDeck>
                        {EventCards.map((item) => {
                            return (
                                <Card className = {classes.cardStyle}>
                                <Card.Body>
                                <img style={{width: '100%', height: '7rem', objectFit: 'cover'}} src={item.imgUrl} alt="" />
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text style={{marginBottom: '.3rem'}}>
                                        {item.text}
                                    </Card.Text> 
                                    </Card.Body>
                                </Card>
                            );
                        })                            
                        }
                    </CardDeck>
                    <br/>
                </section>
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