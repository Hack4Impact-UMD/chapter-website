import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import imageUrlOne from './eventImages/hack4impactUmd.png';
import styles from './Events.module.css';
    
const EventCard = (props) => (
    <section style={{zIndex:1}}>
        <Card className={styles.card}>
            <img className ={styles.card_img} src={props.imgUrl} alt={props.imgAlt}/>
            <Card.Body className = {styles.cardText}>
                <Card.Title><h3>{props.title}</h3></Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    </section>
);

const Events = (props) => (
    <section>
    <EventCard title = {props.title} imgUrl = {props.imgUrl} imgAlt = {props.imgAlt} text = {props.text} />
    </section>
)


export default Events;