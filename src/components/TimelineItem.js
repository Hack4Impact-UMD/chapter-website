import React from 'react';
import classes from '../pages/Students/styles.module.css';

const TimelineItem = props => (
    <div>
        <p className={classes.head2}>{props.head}</p>
        <p className={classes.timePeriod}>{props.timePeriod}</p>
        <p>{props.text}</p>
    </div>
);

export default TimelineItem;