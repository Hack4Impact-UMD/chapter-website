import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import imageUrlOne from './eventImages/hack4impactUmd.png';
import styles from './Events.module.css';
    
const EventCard = (props) => (
    <section style={{zIndex:1}}>
        <Card className={styles.card}>
            <Card.Body>
                <img className ={styles.card_img} src={props.imgUrl} alt={props.imgAlt}/>
            </Card.Body>
            <div className = {styles.cardText}>
                <Card.Title><h3>{props.title}</h3></Card.Title>
                <br/>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </div>
        </Card>
    </section>
);

const cardOneText = "We start each year off with a bootcamp, which is your " +
                    "chance to learn what Hack4Impact UMD is all about! During " +
                    "bootcamp, our members attend workshops and get familiar " +
                    "with the tools they will use on their project team. Throughout " +
                    "the year we also host tech talks and speaker events with professors " +
                    "and other professionals."

const cardTwoText = "We try to learn about our nonprofit partners' missions and work beyond " +
                    "our technical projects as well! We volunteer with every nonprofit we " +
                    "partner with for the year so that each member learns about their work, " +
                    "regardless of their project team."
                    
const cardThreeText = "We love our work because of our amazing members! We host " +
                      "social events so that all of our members can get to know " +
                      "each other and take a break from their school work. We would like to  " +
                      "host game nights, events with other clubs, hikes, " +
                      "and a banquet every " +
                      "year to celebrate everyone's hard work."

const Events = () => (
    <section>
        <h1>Events</h1>
        <br/>
        <CardDeck className= {styles.card_deck}>
            <EventCard title="Educational" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD educating!" imgClassName = "card-img" text = {cardOneText} />
            <EventCard title="Giving Back" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD giving back!" imgClassName = "card-img" text = {cardTwoText} />
            <EventCard title="Social" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD socializing!" imgClassName = "card-img" text = {cardThreeText} />
        </CardDeck>
        <br/>
    </section>
)


export default Events;