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

const opportunities = [
    {
        name: 'Students', 
        image: './students-photo.png',
        description: 'Are you passionate about software and social impact?' +
            ' Are you looking to join a unique and close-knit commuinity? Join Us!' +
            ' Hack4Impact-UMD provides a distinct experience to develop technical skills' +
            ' and interact with nonprofit clients all while applying your skills to impact' +
            ' real lives. We have 30 members and counting, and we would love to have you join us.', 
        link_path: '../Students', 
        link_title: "I'm a Student"
    }, 

    {
        name: 'Nonprofits', 
        image: './opportunities-photo.png',
        
        description: "Does your nonprofit have a software-related issue you'd like to solve? " +
        "We can help you design your website, improve your database, create data visualizations"+
        " , and more! Although we prefer to work with nonprofits " + 
        " in the Washington D.C. - Baltimore Metro Area, we have worked with nonprofits across the country." + 
        " Please reach out if you are interested.",
        link_path: '../Nonprofits', 
        link_title: "I'm a Nonprofit"
    }
]

/**
 * Home page
 */
const Home = () => {
    return (
        <Container style = {{alignContent: 'center', textAlign: 'center',  marginBottom: '4em', alignItems: 'center'}}>
            
            
            {/* Top Picture */}
            <Container style = {{alignContent: 'center', marginBottom: '5em'}}>
                <img className = {styles.containerIMG} src={"./groupPictureWISE-E.PNG"}/>
                
                <Button variant="dark" href="../About" >Meet the Team</Button>   
            </Container>
            


            {/* Project Cards*/}
            <Container style={{ marginTop: '1em', marginBottom: '5em'}}>
                
                <Container>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h3 style={{ marginBottom:'1em' }}>Our Projects</h3>
                        </Col>
                    </Row>
                </Container>
                

                    <CardDeck style={{marginBottom: '2em'}}>                

                        {/* maps through the projects and returns a Project element to display, passing in attributes of the project */}
                        {projs.map(proj => {
                            return (
                                <Card className = {styles.cardStyle}>
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
                
                
                    
                    <Button variant="dark" href="../Projects" >Learn More</Button>   
            </Container>
              

            
            {/* Opportunities Cards */}
            <Container style={{ marginTop: '1em', marginBottom: '2em'}}>
                    <Container>
                        <Row>
                            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h3 style={{ marginBottom:'1em', color:'black' }}>Opportunities</h3>
                            </Col>
                        </Row>
                    </Container>		
                        
                    <CardDeck>         
                        {opportunities.map(proj => {
                            return (//                                
                                <Card className = {styles.cardStyle}>
                                    <Card.Body>
                                    <img style={{ width: '100%', height: '15rem', objectFit: 'cover' }} src={proj.image} alt="" />
                                    <Card.Title>{proj.name}</Card.Title>
                                    <Card.Text style={{marginBottom: '1rem'}}>
                                        {proj.description}
                                    </Card.Text>

                                    <Button variant = "dark" href={proj.link_path}>{proj.link_title}</Button>
                                    </Card.Body>
                                </Card> 
                            )
                        })}
                    


                    </CardDeck>
                    
                 

            </Container>

        </Container>
    );
}

export default Home;