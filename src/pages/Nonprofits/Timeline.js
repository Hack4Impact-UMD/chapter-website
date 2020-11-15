import React from 'react';
import classes from './Timeline.module.css';

const timelineData = [
    {
        head: "Initial Contact",
        timePeriod: "Early July",
        description: "Reach out to our team to get started in our application process! We are interested in hearing about your organization and potential projects you may have in mind."
    },
    {
        head: "Informational Interview",
        timePeriod: "Late July to Early August",
        description: "We will reach out to you to schedule an interview to discuss your project idea. We want to learn more about the problem, potential users, and additional factors that relate to your product."
    },
    {
        head: "Project Selections",
        timePeriod: "September",
        description: "The Hack4Impact board of directors will consider the feasibility of your project and how well it suits our teams and timeline. We want to ensure we are the right people to tackle your problem."
    },
    {
        head: "Response",
        timePeriod: "Late September",
        description: "We will let you know if we have chosen to take on your project. If we do not select it on one year, we highly encourage you to apply again. Since we are also a nonprofit organization, we face many similar resource limitations as you, but are constantly growing in size and funds."
    },
];

const TimelineItem = ({ data }) => (
    <div className={classes.timelineItem}>
        <div className={classes.timelineItemContent}>
            <h4>{data.head}</h4>
            <h5>{data.timePeriod}</h5>
            <p>{data.description}</p>
            
            <span className={classes.circle} />
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