import React from 'react';
import ProjectCard from '../../components/Project.js';
import {Container, Card, Button, Row, Col, CardDeck} from "react-bootstrap";
import styles from "../../components/projectDetails.module.css";

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

const opporStudentsText = "I have to figure out a text for this. But this is a filler. " +
    "Code pls work. Lorem ipsum dolor sit amet, consectetur" +
    " adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
    " dolore magna aliqua.Pellentesque massa placerat duis ultricies."

const opporNonProfitText = "I have to figure out a text for this. But this is a filler. " +
    "Code pls work. Lorem ipsum dolor sit amet, consectetur" +
    " adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
    " dolore magna aliqua.Pellentesque massa placerat duis ultricies."

const OpportunitiesCards = (props) => (
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
        
        {/* Opportunities */}
        <Card style={{ marginTop: '4em',marginBottom: '4em',alignItems: 'center',textAlign: 'center', background: 'aliceblue' }}>
            <Card.Body>
            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3 style={{ marginBottom:'1em' }}>Opportunities</h3>
                    </Col>
                </Row>
            </Container>
                <Row>
                <Container className = {styles.mosaic}>
                
                <section>
                    <br/>
                    <CardDeck className= {styles.card_deck}>
                        <OpportunitiesCards title="Students" imgUrl = {'./students_imge.jpg'} imgAlt = "We ran out of students" imgClassName = "card-img" text = {opporStudentsText} />
                        <OpportunitiesCards title="Nonprofits" imgUrl = {'./nonprofit_imae.jpg'} imgAlt = "We making profit" imgClassName = "card-img" text = {opporNonProfitText} />
                    </CardDeck>
                    <br/>
                </section>             
           
            </Container>
                </Row>                
                </Card.Body>        
        </Card> 
        
        </Container> // top container
    );
}

export default Home;