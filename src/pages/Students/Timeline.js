import React from 'react';
import classes from './Timeline.module.css';

const timelineData = [
    
        {
            head: "Written Application",
            timePeriod: "August 20 - September 10; January 1 - 10",
            description: "New members can join in the beginning of both semesters. We accept written applications at " +
            "the start of the fall or semester and a few weeks before the start of the spring semester. Written Applications " +
            "via the 'apply' button below are open from three weeks before the start of the semester to the first two weeks of " +
            "the semester. If you want to chat with us in person or have any questions, you can come see us at the First or Second " +
            "Look Fairs or send us an email."
        },
        {
            head: "Interview",
            timePeriod: "August 30 - September 14; January 11 - 20",
            description: "We will reach out to schedule an interview if your time availability, " +
            "interests and skills match what we are looking for. Don't stress about your interview! " +
            "We want to get to know you and why you're passionate about joining H4I and our mission. " +
            "If you are applying for a developer position, we may ask technical questions, but we encourage " +
            "everyone to apply regardless of experience level."
        },
        {
            head: "Notified of Decision",
            timePeriod: "September 15 - 20; January 21 - 25",
            description: "We will email you when we have reached a decision on your application. " +
            "Unfortunately, we are not able to accept every student who applies. The number of students " +
            "in our club is determined by the number of nonprofit projects we take on for the year. " +
            "However, we are taking on more and more projects and growing the number of students and positions every year."
        }
    
];

const TimelineItem = ({ data }) => (
    <div className={classes.timelineItem}>
        <div className={classes.timelineItemContent}>
            <h4>{data.head}</h4>
            <h5>{data.timePeriod}</h5>
            <p>{data.description}</p>
            
            <span className={classes.circle} />
            <span className={classes.line} />

        </div>
    </div>
);

const Timeline = () => {
    return (
        <div className={classes.timelineContainer}>
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    )
}

export default Timeline;