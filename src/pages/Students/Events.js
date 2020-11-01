import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import imageUrlOne from './eventImages/hack4impactUmd.png';
import './Events.css';
    
const EventCard = (props) => (
    <section style={{zIndex:1}}>
        <Card className="card">
            <Card.Body>
                <img class="card-img" src={props.imgUrl} alt={props.imgAlt}/>
            </Card.Body>
            <div class="cardText">
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
                    "regardless of their project team. One example of a volunteer event we had " +
                    "was going to plant trees with the Environmental Center of SLO."
                    
const cardThreeText = "We love our work because of our amazing members! We host " +
                      "social events so that all of our members can get to know " +
                      "each other and take a break from their school work. We've " +
                      "hosted game nights, events with other clubs, gone on hikes, " +
                      "and taken many trips to Slodoco. We also have a banquet every " +
                      "year to celebrate everyone's hard work."

const Events = () => (
    <section>
        <h1>Events</h1>
        <br/>
        <CardDeck className="card-deck">
            <EventCard title="Educational" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD educating!" imgClassName = "card-img" text = {cardOneText} />
            <EventCard title="Giving Back" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD giving back!" imgClassName = "card-img" text = {cardTwoText} />
            <EventCard title="Social" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD socializing!" imgClassName = "card-img" text = {cardThreeText} />
        </CardDeck>
        <br/>
    </section>
)


export default Events;