import React from 'react';
import classes from './Timeline.module.css';

const timelineData = [
    {
        head: "Initial Contact",
        timePeriod: "Early June and Early December",
        description: "Reach out to our team to get started in our application process! We are interested in hearing about your organization and potential projects you may have in mind."
    },
    {
        head: "Informational Interview",
        timePeriod: "Late July to Early August; Early to Mid January",
        description: "We will reach out to you to schedule an interview to discuss your project idea. We want to learn more about the problem, potential users, and additional factors that relate to your product."
    },
    {
        head: "Notified of Decision",
        timePeriod: "Mid August and Mid January",
        description: "The Hack4Impact board of directors will consider the feasibility of your project and how well it suits our teams and timeline. We want to ensure we are the right people to tackle your problem. We will let you know if we have chosen to take on your project. If we are at capacity, another Hack4Impact chapter may take on your project"
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