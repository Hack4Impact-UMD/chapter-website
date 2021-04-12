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
        Shania Kamara, Jessica Le, Yashas Lokesh, Sammy Munta, Eileen Wang, Joseph Davies',
        github: 'https://github.com/ecodistricthamptonroads/EcoDistricts-Hampton-Roads',
        nonprofit: 'http://ecodistricthamptonroads.org/', 
        linktitle: 'Hampton Roads, VA Ecodistrict Website',
        date: "Spring 2021"
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
        linktitle: 'WISE-E Website',
        date: "Spring 2021"
    },

    {
        name: 'California Data Collaborative (CaDC) ', 
        image: './women.png',
        description: 'This project team is helping the California Data Collaborative to update their \
        user interface of a web application they use. Specifically, they are  \
        currently focusing on adding small features that can help \
        users of this web application have an easier time with navigation. They \
        are also cleaning up various parts of their website so users can \
        see information in a neater manner. The CaDC is a non-profit that helps \
        create tools along with do research regarding water management. ', 
        techstack: 'Vue, Flask',
        members: 'Daneil Nguyen (PM), Anna Feng (Tech Lead), \
        Kevin Chen, Tahmid Hannan, Thomas Pallan, \
        Surabi Rammamurthy, Anthony Squillacioti',
        github: 'https://github.com/Hack4Impact-UMD/',
        nonprofit: 'http://californiadatacollaborative.org/', 
        linktitle: 'CaDC Website',
        date: "Spring 2021"
    },

    {
        name: 'CaDC Data Parser', 
        image: './women.png',
        description: 'This project team is helping the California Data Collaborative to \
        clean, aggregate, and display data given by CaDC customers by checking the validity  \
        and correctness of the data prior to transporting it into an Amazon S3 \
        bucket. They will also use a proxy portal as well as fake data \
        in order to write and test functionality of existing code \
        The CaDC is a non-profit that helps \
        create tools along with do research regarding water management. ', 
        techstack: 'Figma, Flask',
        members: 'Mohini Dutta (PM), Alisha Varma (PM), Stanley (Tech Lead), \
        Alexis Johnson, Angela Liu, Vidit Makwana, Andy Qu, \
        Samara Wondimu, Rachel Wu',
        github: 'https://github.com/Hack4Impact-UMD/',
        nonprofit: 'http://californiadatacollaborative.org/', 
        linktitle: 'CaDC Website',
        date: "Spring 2021"
    },

    {
        name: 'Panel 5 ',
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
        linktitle: 'WISE-E Website',
        date: "Fall 2020"
    },

    // {
    //     name: 'Women in Science, Engineering, and the Environment (WISE-E) ', 
    //     image: './women.png',
    //     description: 'This project team is working to create a website \
    //     home for the Women in Science, Engineering, and the Environment \
    //     (WISE-E) program. The initiative aims to connect women interested \
    //     in science to resources and larger networks and promote their \
    //     participation in these fields. This was made in partnership with the Center for Sustainable Communities-Atlanta\
    //     and IEEE.', 
    //     techstack: 'MongoDB, React, Node, Material-UI, AWS',
    //     members: 'Lydia Hu (PM), Jason Maa (Tech Lead), \
    //     Shivanee Arun, Elizabeth Chen, Nate Mekonnen, \
    //     Daneil Nguyen',
    //     github: 'https://github.com/Hack4Impact-UMD/WISE-E',
    //     nonprofit: 'https://csc-atl.org/wise-e/', 
    //     linktitle: 'WISE-E Website',
    //     date: "Fall 2020"
    // },
]

class Projects extends React.Component{
    constructor(props) {
        super(props)
    }

    renderCards() {
        let projectCards = projectCardInfo.map((info) => {
            return <ProjectCard name={info.name} description={info.description} techstack={info.techstack}
            members={info.members} github={info.github} date = {info.date} nonprofit={info.nonprofit} linktitle={info.linktitle} image={info.image}/>
        });

        let rowGroups = [];
        while(projectCards.length){
          rowGroups.push(projectCards.splice(0, 2));
        }
        let rows = rowGroups.map((cardRowArray) => {
          return(
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col >
                {cardRowArray[0]}
                </Col>
                <Col >
                {cardRowArray[1]}
                </Col>
            </Row>
          );
        })

        return (
            <Container>
                {rows}
            </Container>
        );
    }

    render() {
        return (
            <div>
                <div style={{marginTop: '7em', alignContent: 'center', textAlign: 'center', color: 'black'}} >
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