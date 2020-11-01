import React from 'react';
import TimelineItem from './TimelineItem';
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
                    <button className={classes.ctaButton}>Apply Now</button>
                </div>
                
            </div>
        )
    }
}
export default Students;