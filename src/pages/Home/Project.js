import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

/**
 * This Project thingy displays a project (idk correct terminology)
 * @param {*} props the title, description, and list of members of a project 
 */

class Project extends React.Component {
 

    render() {
        return (
            <>
                <Card style={{width: 'auto', background: '#f4f4f4' }}>
                    <Card.Img varient='top' src={this.props.title_img} />
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.date}</Card.Subtitle>
                        <Card.Text>{this.props.description}</Card.Text>
                        
                        {/*<Card.Title>Members</Card.Title>*/}

                        {/* maps through the list of members and creates an li element for each one */}
                        {/*
                        <ListGroup variant='flush'>
                            {this.props.members.map(member => {
                                return (
                                    <ListGroupItem>{member}</ListGroupItem>
                                )
                            })}
                        </ListGroup>
                        */}
                    </Card.Body>
                </Card>
            </>
        )
    }
   
}

export default Project;