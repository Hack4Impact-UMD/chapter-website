import React from 'react'

/**
 * This Project thingy displays a project (idk correct terminology)
 * @param {*} props the title, description, and list of members of a project 
 */

const Project = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>Members</h2>
            <ol>
                {/* maps through the list of members and creates an li element for each one */}
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