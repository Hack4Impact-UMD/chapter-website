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
        linktitle: 'http://ecodistricthamptonroads.org/',
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
        linktitle: 'https://csc-atl.org/wise-e/',
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
        description: 'This project team created a desktop application \
        for the Arcadia Center for Sustainable Food and \
        Agriculture, a nonprofit organization dedicated to creating a more equitable and sustainable \
        local food system in the Washington, DC area. The application automates the generation of individualized pdf reports \
        for the organization\'s customers.',
        techstack: 'Python, PyFPDF, Pandas, Matplotlib',
        members: 'Sadena Rishindran (PM), Abbie Tran (Tech Lead), Steven Berit, Sravya Kommuri, Miranda Song, Hana Zherka, Sean Ha',
        github: 'https://github.com/Hack4Impact-UMD/Arcadia',
        nonprofit: '',
        photoslide: ['/arcadia_app.png', 'arcadia_report.png'],
        linktitle: 'http://arcadiafood.org/',
        date: "Spring 2021"
    },
    {
        name: 'CaDC Water Rebate',
        image: './cadc.png',
        description: 'This project team helped the California Data Collaborative (CaDC) update the user interface of their web application. \
        They added small features to help the web application\'s users more easily navigate it, including reorganizing the buttons and adding toggles to hide tables when unneeded.\
        They also implemented ranking charts to help users gauge water saving performance in different cities for a specified rebate program.',
        techstack: 'Python, Flask, Postgres, AWS',
        members: 'Daneil Nguyen (PM), Anna Feng (Tech Lead), Anthony Squillacioti, Thomas Pallan, Kevin Chen, Nate Mekonnen, Surabi Ramamurthy, Eric Yi',
        github: '',
        nonprofit: '',
        linktitle: 'https://californiadatacollaborative.org/',
        date: "Spring 2021"
    },
    {
        name: 'CaDC Data Parser',
        image: './water.jpg',
        description: 'This project team cleaned, aggregated, and displayed the data given ' + 
        'by CaDC customers by checking the validity and correctness of the data prior to transporting it into an Amazon S3 bucket. \
        The California Data Collaborative (CaDC) is a network of water professionals collaborating to create tools and applied research supporting planning and analysis.',
        techstack: 'Python, Flask, Postgres, AWS',
        members: 'Mohini Dutta (PM), Alisha Varma (PM), Stanley Thomas (Tech Lead), Alexis Johnson, Angela Liu, Vidit Makwana, Andy Qu, Samara Wondimu, Rachel Wu',
        github: '',
        nonprofit: '',
        linktitle: 'https://californiadatacollaborative.org/',
        date: "Spring 2021"
    }
 
]

class Projects extends React.Component{
    constructor(props) {
        super(props)
    }

    renderCards() {
        let projectCards = projectCardInfo.map((info) => {
            return <ProjectCard name={info.name} linktitle = {info.linktitle} description={info.description} techstack={info.techstack}
            members={info.members} photoslide={info.photoslide} github={info.github} date = {info.date} nonprofit={info.nonprofit} linktitle={info.linktitle} image={info.image}/>
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
                            Each school year, we partner with a few nonprofits to help them better serve their communities. Here are the projects we have worked on in the past and are currently working on.
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