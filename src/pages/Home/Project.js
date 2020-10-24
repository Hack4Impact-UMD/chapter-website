import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

/**
 * This Project thingy displays a project (idk correct terminology)
 * @param {*} props the title, description, and list of members of a project 
 */

const Project = props => {
    
    return (
        <>
            <Card style={{width: 'auto', background: '#f4f4f4' }}>
                <img src="" style={{width: '100%'}} alt="background" />
                <Card.Img varient='top' src="" />
                <Card.body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Card.Title>Members</Card.Title>

                    {/* maps through the list of members and creates an li element for each one */}
                    <ListGroup variant='flush'>
                        {props.members.map(member => {
                            return (
                                <ListGroupItem>{member}</ListGroupItem>
                            )
                        })}
                    </ListGroup>
                </Card.body>
            </Card>
        </>
    )

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>Members</h2>
            <ol>
                {// maps through the list of members and creates an li element for each one
                }
                {props.members.map(member => {
                    return (
                        <li>{member}</li>
                    )
                })}
            </ol>
        </div>
    ) 
}

export default Project;