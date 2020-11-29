import React from 'react';
import {Container, Button, Row, Col, Card, CardDeck} from "react-bootstrap";
import styles from "./styles.module.css";



/**
 * Array of project objects
 */
const projs = [
    {
        name: 'Hampton Roads ECO District', 
        image: './ECODistrictPic.PNG',
        description: 'A website for the EcoDistrict in the Hampton Roads,Virginia community that gives residents access to resources that help community members support each other.', 
        date: 'Fall 2020'
        /*members: ['Simin Li (PM)', 'Rajashow Parajuli (Tech Lead)', 'Shania Kamara', 'Jessica Le', 'Yashas Lokesh', 'Sammy Munta']*/
    }, 

    {
        name: 'Women in Science, Engineering, and the Environment (WISE-E)', 
        image: './women.PNG',
        description: 'A website home for WISE-E, an initiative that aims to connect women interested \
        in science to resources and promote their \
        participation in these fields.', 
        date: 'Fall 2020'
        /*members: ['Lydia Hu (PM)', 'Jason Maa (Tech Lead)', 'Shivanee Arun', 'Elizabeth Chen', 'Nate Mekonnen', 'Daneil Nguyen']*/
    }
]

/**
 * Home page
 */
const Home = () => {
    return (
        <Container style = {{alignContent: 'center', textAlign: 'center',  marginBottom: '4em', alignItems: 'center'}}>
            
            
            {/* Top Picture */}
            <Container style = {{alignContent: 'center'}}>
                <img className = {styles.containerIMG} src={"./groupPictureWISE-E.PNG"}/>
                
                <Button variant="danger" href="../About" className = {styles.buttonCenter} >Learn More</Button>    
            </Container>


            {/* Project Cards*/}
            <Container style={{ marginTop: '1em', marginBottom: '2em'}}>
                
                <Container>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h3 style={{ marginBottom:'1em' }}>Our Projects</h3>
                        </Col>
                    </Row>
                </Container>
                

                    <CardDeck>
                

                        {/* maps through the projects and returns a Project element to display, passing in attributes of the project */}
                        {projs.map(proj => {
                            return (
                                <Card border = "secondary">
                                    <img style={{width: '100%', height: '7rem', objectFit: 'cover'}} src={proj.image} alt="" />
                                    <Card.Title>{proj.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{proj.date}</Card.Subtitle>
                                    <Card.Text style={{marginBottom: '.3rem'}}>
                                        {proj.description}
                                    </Card.Text>
                                
                                </Card>
                            )
                        })}  
                    </CardDeck>
                
                
                    
                
            </Container>
            <Button variant="dark" href="../Projects" >Learn More</Button>     
        </Container>
    );
}

export default Home;