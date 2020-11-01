import React from 'react';
import classes from './styles.module.css';

const TimelineItem = props => {
return (
    <div div className={classes.timelineItem}>
        <span className={classes.head3}>{props.head}</span>
        <span className={classes.timePeriod}>{props.timePeriod}</span>
        <p>{props.description}</p>
    </div>
);
}

export default TimelineItem;