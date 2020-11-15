import React from 'react';
import {Card} from "react-bootstrap";
import styles from "./projectDetails.module.css";
import {FaGithub} from "react-icons/fa";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
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
        <a style={{marginRight: '5px'}} href={this.props.github}>
            <FaGithub  style={{width: '30px', height: '30px', color: 'black'}} />
        </a>;
    }

    return (
        <div className={styles.card}>
            <Card style={{overflow: 'auto', marginBottom: '30px', width: '100%', height: '100%'}} >
                <div className={styles.container} >
                    <img style={{width: '100%', height: '7rem', objectFit: 'cover'}} src={this.props.image} alt="" />
                    <div className={styles.centered}>{this.props.name}</div>
                </div>

                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.date}</Card.Subtitle>
                    <Card.Text style={{marginBottom: '.3rem'}}>
                        {this.props.description}
                    </Card.Text>

                    {members}                    

                    <div style={{margin: '10px'}}/>
                    <div style={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}> 
                       {githubIcon}
                    </div>
                    
                </Card.Body>
            </Card>
        </div>

    )
  }
}

export default ProjectCard;