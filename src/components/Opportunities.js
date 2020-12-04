import React from 'react';
import {Card} from "react-bootstrap";
import styles from "./projectDetails.module.css";
import {FaGithub, FaInfoCircle} from "react-icons/fa";

// Implemented from Projects.js to fit better with the opportunities tab on the homepage.

class OpportunitiesCard extends React.Component {
    constructor(props) {
        super(props)
    }
    
  render() {
      
    let infoIcon = <></>;
    if (this.props.nonprofit !== undefined && this.props.linktitle !== undefined) {
        infoIcon = 
        <a style={{marginRight: '10px'}} href={this.props.nonprofit} target={'_blank'} title={this.props.linktitle}>
        <FaInfoCircle  style={{width: '30px', height: '30px', color: 'black'}} />
        </a>;
    }

    return (
        <div className={styles.card}>
            <Card style={{overflow: 'auto', marginBottom: '30px', width: '100%', height: '100%'}} >
                <div className={styles.container} >
                    <img style={{width: '100%', height: '10rem', objectFit: 'cover'}} src={this.props.image} alt="" />
                    <div className={styles.centered}>{this.props.name}</div>
                </div>

                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.date}</Card.Subtitle>
                    <Card.Text style={{marginBottom: '.3rem'}}>
                        {this.props.description}
                    </Card.Text>
                    

                    <div style={{margin: '10px'}}/>
                    <div style={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}> 
                        {infoIcon}
                    </div>
                                  

                    
                    
                </Card.Body>
            </Card>
        </div>

    )
  }
}

export default OpportunitiesCard;