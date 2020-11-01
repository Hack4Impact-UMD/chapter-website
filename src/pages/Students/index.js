import React from 'react';
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
            </div>
        )
    }
}
export default Students;