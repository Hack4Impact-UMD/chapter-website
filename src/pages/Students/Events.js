import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import imageUrlOne from './eventImages/hack4impactUmd.png';
import './Events.css';
    
const EventCard = (props) => (
    <section>
        <Card className="card">
            <Card.Body>
                <img src={props.imgUrl} alt={props.imgAlt} width="200em"/>
            </Card.Body>
            <Card.Title className="card"><h3>{props.title}</h3></Card.Title>
            <br/>
            <Card.Text>
                {props.text}
            </Card.Text>
        </Card>
    </section>
);

const Events = () => (
    <section>
        <CardDeck className="card-deck">
            <EventCard title="Educational" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD educating!" imgClassName = "card-img" text = "This is the event card text" />
            <EventCard title="Educational" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD educating!" imgClassName = "card-img" text = "This is the event card text" />
            <EventCard title="Educational" imgUrl = {imageUrlOne} imgAlt = "Hack4Impact UMD educating!" imgClassName = "card-img" text = "This is the event card text" />
        </CardDeck>
    </section>
)

/*
const Events = () => (
    <section>
        <Card style={{ width: '18rem'}}>
            <Card.Title><h3>Educational</h3></Card.Title>
            <Card.Body>
                <img src={imageUrl} alt="Hack4Impact UMD educating!" class="card-one-img"/>
            </Card.Body>
            <Card.Text>
                This is the text that will go in an event card
            </Card.Text>
        </Card>
    </section>
)
*/

export default Events;