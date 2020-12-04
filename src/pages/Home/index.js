import React from 'react';
import ProjectCard from '../../components/Project.js';
import {Container, Card, Button, Row, Col, CardDeck} from "react-bootstrap";
import styles from "../../components/projectDetails.module.css";
import { FaGithub, FaInfoCircle } from "react-icons/fa";
import OpportunitiesCard from '../../components/Opportunities.js';


/**
 * Array of project objects
 */
const projs = [
    {
        name: 'Hampton Roads ECO District', 
        image: './ecod.PNG',
        description: 'A website for the EcoDistrict in the Hampton Roads,Virginia community that gives residents access to jobs/opportunities, surveys/focus groups, and tools such as Healthy Home & Energy Efficiency Tool to help community members support each other.', 
        date: 'Fall 2020'
        /*members: ['Simin Li (PM)', 'Rajashow Parajuli (Tech Lead)', 'Shania Kamara', 'Jessica Le', 'Yashas Lokesh', 'Sammy Munta']*/
    }, 

    {
        name: 'Women in Science, Engineering, and the Environment (WISE-E)', 
        image: './women.PNG',
        description: 'A website home for the Women in Science, Engineering, and the Environment (WISE-E) program. This initiative aims to connect women interested in science to resources and larger networks and promote their participation in these fields.', 
        date: 'Fall 2020'
        /*members: ['Lydia Hu (PM)', 'Jason Maa (Tech Lead)', 'Shivanee Arun', 'Elizabeth Chen', 'Nate Mekonnen', 'Daneil Nguyen']*/
    }
]

const opportunities = [
    {
        name: 'Students', 
        image: './students-photo.png',
        description: 'Are you passionate about software and social impact?' +
            ' Are you looking to joina unique and close-knit commuinity? Join Us!' +
            ' Hack4Impact-UMD provides a distinct experience to develop technical skills' +
            ' and interact with nonprofit clients all while applyingyour skills to impact' +
            ' real lives.', 
        link: '../Students', 
        linktitle: 'I\'m A Student'
    }, 

    {
        name: 'Nonprofits', 
        image: './opportunities-photo.png',
        description: 'I have to figure out a text for this. But this is a filler. Code pls work.', 
        link: '../Nonprofits', 
        linktitle: 'I\'m A Nonprofit'
    }
]

/**
 * Home page
 */
const Home = () => {
    return (
        <Container style = {{alignContent: 'center', textAlign: 'center'}}>
        <h1>Hack4Impact UMD</h1>
        <p>Hack4Impact-UMD is a group of University of Maryland students who work with local and national non-profits to create software that improves the world around us. We also dicuss ethical technology, have talks about using technology for social good, and have fun! This club was founded in 2020 and is a chapter of the Hack4Impact, a national 501(c)3 organization.</p>
        {/* Project Cards*/}
        <Card style={{ marginTop: '4em',marginBottom: '4em',alignItems: 'center',textAlign: 'center', background: 'aliceblue' }}>
            <Card.Body>
            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3 style={{ marginBottom:'1em' }}>Our Projects</h3>
                    </Col>
                </Row>
              </Container>
                <Row>
                <Container className = {styles.mosaic}>
           

           {/* maps through the projects and returns a Project element to display, passing in attributes of the project */}
           {projs.map(proj => {
               return (
                   <ProjectCard
                        name = {proj.name}
                       image = {proj.image}
                       description = {proj.description}
                       date = {proj.date}
                   />
               )
           })}  
       </Container>
                </Row>
                <Button style={{marginTop: '1em'}} variant="solid" href="../Projects">Learn More</Button>
                
              </Card.Body>
        </Card>
            
        {/* Opportunities - Implemented previous code to make it easier to maintain in the future */}
        <Card style={{ marginTop: '4em',marginBottom: '4em',alignItems: 'center',textAlign: 'center', background: 'transparent' }}>
            <Card.Body>
            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h4 style={{ marginBottom:'1em', color:'black' }}>Opportunities</h4>
                    </Col>
                </Row>
              </Container>
                <Row>
                <Container className = {styles.mosaic}>
           

            {opportunities.map(opportunities => {
               return (
                   <OpportunitiesCard
                        name = {opportunities.name}
                       description = {opportunities.description}
                       nonprofit = {opportunities.link}
                       linktitle = {opportunities.linktitle}
                       image={opportunities.image}
                       
                   />
               )
            })}  
            </Container>
            </Row>
                
              </Card.Body>
        </Card>
            

        
        </Container> // top container
    );
}

export default Home;