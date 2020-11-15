import React from 'react';
import classes from './styles.module.css';
import FAQItem from "../../components/FAQItem.js";
import faq_styles from "../../components/FAQItem.module.css";
import Timeline from './Timeline';


const FAQAnswers = [
    "Most of the projects we undertake are web applications. Common examples " +
    "of problems we tackle include volunteer tracking forms, member directories, " +
    "and data tracking softwares. Check out our " + <a href="/projects">projects page</a> + 
    " to see some of our previous work, and feel free to contact " +
    "us with any project ideas!",

    "These projects are free or low cost ($5- $15 / month) for the website " +
    "and hosting expenses. We are building software to better help you " +
    "serve your community, and we know how tight money can be so we try to " +
    "keep these expenses as low as possible.",

    "Most development begins at the start of the new year and continues " +
    "until around mid-April. Throughout all of this, we will remain in " +
    "constant contact with you to ensure that we are building an application " +
    "that you will want to use.",

    "We strongly believe in continuous and transparent communication to ensure " +
    "that your project is something that you will be happy with. This means we " +
    "will be asking for constant feedback throughout the development cycle, " +
    "including check-ins and surveys.",

    "Once we hand the product off to you around mid-April, we want to give you time " +
    "to experiment with it and find anything that needs to be changed. Once we end " +
    "our school year in mid-June, we will no longer be able to make additions as easily " +
    "due to limited resources on our end. If you encounter bugs on the site, we will " +
    "attempt to correct these issues, but cannot guarantee that we will be able to.",
]

const Nonprofits = () => {
    return (
        <div class = 'NPO-section'>
        
            <div className = {classes.flexContainer}>
                <div className = {classes.introSection}>
                    <h1>Nonprofits</h1>
                    <p>At Hack4Impact, we understand that nonprofit organizations 
                    are a valuable asset to our community. We want to use our software 
                    and web development skills to help nonprofits.</p>
                    <p>If you are interested in any technology development for your 
                    organization, please let us know by filling out the application or
                    contacting us! Our goal is to help your organization by providing 
                    software solutions.</p>
                </div>
                <button className = {classes.button}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfaeqcwOGt3QR0h4Lmo-fwW4mA108jpeb0p06upiivwxpDArw/viewform">Apply Now</a></button>
            </div>
            
            <div className = {classes.timelineSection}>
                <h2>Application Process</h2>
                <Timeline/>
            </div>

            <div className = {classes.FAQSection}>
                <h1>Frequently Asked Questions</h1>
                    <div className = {faq_styles.faq_list}>
                        <FAQItem question = "What types of projects do you undertake?" answer = {FAQAnswers[0]} />
                        <FAQItem question = "How much does this cost?" answer = {FAQAnswers[1]} />
                        <FAQItem question = "What does the project timeline look like?" answer = {FAQAnswers[2]} />
                        <FAQItem question = "How much involvement is expected from nonprofits?" answer = {FAQAnswers[3]} />
                        <FAQItem question = "How does long term maintenance work?" answer = {FAQAnswers[4]} />
                    </div>
            </div>
            
        </div>
    )
}
export default Nonprofits;