import React from 'react';
import {Accordion, Card} from "react-bootstrap";
import styles from "../Nonprofits/FAQ.module.scss";

export const FAQ = ({ title, children }) => {
    const Questions = React.Children.map(children, (question, index) => makeQuestion(question, index));

    return (
        <>
        <h2 className>Frequently Asked Questions</h2>
        <Accordion className>
            { Questions }
        </Accordion>
        </>
    );
};

function makeQuestion(question, index) {
    return (
        <>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={index+1}>
                {question.props.ask}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index+1}>
                <Card.Body className={styles.answer}>{question.props.children}</Card.Body>
            </Accordion.Collapse>
        </Card>
        </>
    );
}