import React from 'react';
import {Card} from "react-bootstrap";
import styles from "./projectDetails.module.css";
import {FaGithub, FaInfoCircle, FaImages} from "react-icons/fa";
import FsLightbox from 'fslightbox-react';

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }
    
  render() {

    // Information about members should only appear on the projects page
    let members = <></>;
    if (this.props.members !== undefined) {
        members = <Card.Text style={{marginBottom: '.3rem'}}>
        <b>Team Members: </b>
        {this.props.members}
    </Card.Text>;
    }
    

    // GitHub Icon only appears on the projects page
    let githubIcon = <></>;
    if (this.props.github !== undefined) {
        githubIcon = 
        <a style={{marginRight: '5px'}} href={this.props.github} target={'_blank'} title={'Github Link'}>
            <FaGithub  style={{width: '30px', height: '30px', color: 'black'}} />
        </a>;
    }
    
    

    let techStack = <></>;
    if(this.props.techstack !== undefined) {
        techStack = 
        <Card.Text style={{marginBottom: '.3rem'}}>
        <b>Tech Stack: </b>
        {this.props.techstack}
    </Card.Text>;
    }

    let infoIcon = <></>;
    if (this.props.nonprofit !== undefined && this.props.linktitle !== undefined) {
        infoIcon = 
        <a style={{marginRight: '10px'}} href={this.props.nonprofit} target={'_blank'} title={this.props.linktitle}>
        <FaInfoCircle  style={{width: '30px', height: '30px', color: 'black'}} />
        </a>;
    }

    // Photoslide instead of info
    let lightbox = <></>;
    if (this.props.photoslide !== undefined) {
        lightbox = <FsLightbox
            toggler={this.state.isVisible}
            sources={this.props.photoslide}
        />
        infoIcon = <a><FaImages style={{width: '30px', height: '30px', marginLeft: '5px',}} onClick={() => {
            this.setState({ isVisible: !this.state.isVisible })
          }}/></a>
    }

    return (
        <div className={styles.card}>
            

            {lightbox}
            <Card style={{overflow: 'auto', marginBottom: '30px', width: '100%', height: '100%'}} >
                <div className={styles.container} >
                    
                    <a href={this.props.linktitle} target={'_blank'}> <img style={{width: '100%', height: '7rem', objectFit: 'cover'}} src={this.props.image} alt="" href="www.google.com" target={'_blank'}/></a>
                    <Card.Title style={{marginTop: '.5rem', marginBottom: '.5rem'}}>{this.props.name}</Card.Title>
                </div>

                

                <Card.Body >
                    <Card.Subtitle className="mb-2 text-muted" style = {{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>{this.props.date}</Card.Subtitle>
                    <Card.Text style={{marginBottom: '.3rem'}}>
                        {this.props.description}
                    </Card.Text>
                    
                    {techStack}
                    {members} 

                    <div style={{margin: '10px'}}/>
                    <div style={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}> 
                        {githubIcon}
                        {infoIcon}
                    </div>
                                  

                    
                    
                </Card.Body>
            </Card>
        </div>

    )
  }
}

export default ProjectCard;