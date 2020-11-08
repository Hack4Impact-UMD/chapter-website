import React from 'react';
import {Card} from "react-bootstrap";
import styles from "./projectDetails.module.css";
import {FaGithub} from "react-icons/fa";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <div className={styles.card}>
            <Card style={{overflow: 'auto', marginBottom: '30px', width: '100%', height: '100%'}} >
                <div className={styles.container} >
                    <img style={{width: '100%', height: '7rem', objectFit: 'cover'}} src={this.props.image} alt="" />
                    <div className={styles.centered}>{this.props.name}</div>
                </div>

                <Card.Body>
                    <Card.Text style={{marginBottom: '.3rem'}}>
                        {this.props.description}
                    </Card.Text>

                    <Card.Text style={{marginBottom: '.3rem'}}>
                        <b>Team Members: </b>
                        {this.props.members}
                    </Card.Text>

                    <div style={{margin: '10px'}}/>
                    <div style={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}> 
                        <a style={{marginRight: '5px'}} href={this.props.github}>
                            <FaGithub  style={{width: '30px', height: '30px', color: 'black'}} />
                        </a>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>

    )
  }
}

export default ProjectCard;