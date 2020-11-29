import React from 'react';
import {Container, Button, Row, Col, Card, CardDeck} from "react-bootstrap";



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
        <Container style = {{alignContent: 'center', textAlign: 'center', width: '70%', marginBottom: '4em'}}>
        <h1>Hack4Impact UMD</h1>
        <p style={{color: 'white', alignSelf: 'center', fontSize: '1.05em'}}>Hack4Impact-UMD is a group of University of Maryland students who work with local and national non-profits to create software that improves the world around us. We also dicuss ethical technology, have talks about using technology for social good, and have fun! This club was founded in 2020 and is a chapter of Hack4Impact, a national 501(c)3 organization.</p>
        
        {/* Project Cards*/}
        <Container style={{ marginTop: '4em',marginBottom: '2em',alignItems: 'center',textAlign: 'center' }}>
            
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
                            <Card border = "lsecondary">
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