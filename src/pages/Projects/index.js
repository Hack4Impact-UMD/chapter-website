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
        date: "Fall 2020"
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
        date: "Fall 2020"
    },
    {
       name: 'Inspire and Empower',
       image: './InspireAndEmpower.png',
       description: 'This project team is developing a \
       website for Inspire and Empower, which aims to give women interested \
       in STEM greater resources. The team is building a website for the \
       organization to convey information and will allow women to \
       connect to others.',
       techstack: 'MongoDB, Express.js, React, Node, Strapi',
       members: 'Ferzam Mohammad (PM), Vrundal Shah (Tech Lead), Eileen Wang, Katherine Wang, Julie Yang, Vibhu Agrawal, Shivanee Arun, Rudy Fuentes, Daniel Wei',
       nonprofit: '',
       linktitle: '',
       github: 'https://github.com/Hack4Impact-UMD/inspire-and-empower',
       date: "Spring 2021"
    },
    {
        name: 'Arcadia',
        image: './Arcadia.png',
        description: 'The Arcadia project team is working on a website that uses a script that automates the generation of individualized pdf reports in bulk from Google Sheets for the Arcadia Center for Sustainable Food and Agriculture’s customers. The Arcadia Center for Sustainable Food and Agriculture is a nonprofit organization dedicated to creating a more equitable and sustainable local food system in the Washington, DC area. They provide workforce training in agriculture on the farm in Alexandria, distribute fresh, affordable food to underserved DC-area neighborhoods via their Mobile Market and connect schools with health, local food for school meals and farm education.',
        techstack: 'Python, Flask, Pandas, Matplotlib, PyFPDF',
        members: 'Sadena Rishindran (PM), Abbie Tran (Tech Lead), Steven Berit, Sravya Kommuri, Miranda Song, Hana Zherka, Sean Ha',
        github: 'https://github.com/Hack4Impact-UMD/Arcadia',
        nonprofit: '',
        linktitle: '',
        date: "Spring 2021"
    }
 
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