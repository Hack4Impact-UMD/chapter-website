import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from "../../components/projectDetails.module.css";
import ProjectCard from '../../components/Project.js';
import {useMediaQuery} from 'react-responsive';

const projectCardInfo = [
    {
        name: 'Hampton Roads ECO District', 
        image: './ECODistrictPic.png',
        description: 'This project team is developing a \
        website for the ECO District community in Hampton Roads, Virginia. \
        The website gives residents access to jobs/opportunities, \
        surveys/focus groups, and tools such as Healthy Home & \
        Energy Efficiency Tool to help community members support \
        each other. This was made in partnership with the Center for Sustainable Communities-Atlanta.', 
        techstack: 'MongoDB, Express.js, React, Node, AWS',
        members: 'Simin Li (PM), Rajashow Parajuli (Tech Lead), \
        Shania Kamara, Jessica Le, Yashas Lokesh, Sammy Munta, Eileen Wang',
        github: 'https://github.com/ecodistricthamptonroads/EcoDistricts-Hampton-Roads',
        nonprofit: 'http://ecodistricthamptonroads.org/', 
        linktitle: 'Hampton Roads, VA Ecodistrict Website'
    }, 

    {
        name: 'Women in Science, Engineering, and the Environment (WISE-E) ', 
        image: './women.png',
        description: 'This project team is working to create a website \
        home for the Women in Science, Engineering, and the Environment \
        (WISE-E) program. The initiative aims to connect women interested \
        in science to resources and larger networks and promote their \
        participation in these fields. This was made in partnership with the Center for Sustainable Communities-Atlanta\
        and IEEE.', 
        techstack: 'MongoDB, React, Node, Material-UI, AWS',
        members: 'Lydia Hu (PM), Jason Maa (Tech Lead), \
        Shivanee Arun, Elizabeth Chen, Nate Mekonnen, \
        Daneil Nguyen',
        github: 'https://github.com/Hack4Impact-UMD/WISE-E',
        nonprofit: 'https://csc-atl.org/wise-e/', 
        linktitle: 'WISE-E Website'
    }
]

class Projects extends React.Component{
    constructor(props) {
        super(props)
    }

    renderCards() {
        let projectCards = projectCardInfo.map((info) => {
            return <ProjectCard name={info.name} description={info.description} techstack={info.techstack}
            members={info.members} github={info.github} nonprofit={info.nonprofit} linktitle={info.linktitle} image={info.image}/>
        });

        let rowGroups = [];
        while(projectCards.length){
          rowGroups.push(projectCards.splice(0, 2));
        }
        let rows = rowGroups.map((cardRowArray) => {
          return(
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm={11} md={6} lg={5} xl={5}>
                {cardRowArray[0]}
                </Col>
                <Col sm={11} md={6} lg={5} xl={5}>
                {cardRowArray[1]}
                </Col>
            </Row>
          );
        })

        return (
            <Container className = {styles.mosaic}>
                {rows}
            </Container>
        );
    }

    render() {
        return (
            <div>
                <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'black'}} >
                    <h1 style={{color: 'black', alignSelf: 'center'}}>Our Work</h1>
                    <div style={{margin: '30px'}}/>
                    <Container >
                        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" , color: "white"}}>
                            <Col sm={12} md={8} lg={6} xl={6}>
                            Each school year, we partner with a few nonprofits to help them better serve their communities. Here are the projects we are working on this semester.
                            </Col>
                        </Row>
                    </Container>
                    <div style={{margin: '40px'}}/>
                </div>
                {this.renderCards()}
            </div>
        )
    }
}

export default Projects;