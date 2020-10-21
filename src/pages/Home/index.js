import React from 'react';
import Project from './Project'

/**
 * Array of project objects
 */
const projs = [
    {
        title: 'EcoDistrict Project',
        description: 'This project team is developing a website for the EcoDistricts VA, Hampton Roads community. The website gives residents access to jobs/opportunities, surveys/focus groups, and tools such as Healthy Home & Energy Efficiency Tool to help community members support each other.', 
        members: ['Simin Li (PM)', 'Rajashow Parajuli (Tech Lead)', 'Shania Kamara', 'Jessica Le', 'Yashas Lokesh', 'Sammy Munta']
    }, 

    {
        title: 'Women in Science, Engineering, and the Environment (WISE-E) program',
        description: 'This project team is working to create a website home for the Women in Science, Engineering, and the Environment (WISE-E) program. This initiative aims to connect women interested in science to resources and larger networks and promote their participation in these fields.', 
        members: ['Lydia Hu (PM)', 'Jason Maa (Tech Lead)', 'Shivanee Arun', 'Elizabeth Chen', 'Nate Mekonnen', 'Daneil Nguyen']
    }
]

/**
 * Home page
 */
const Home = () => {
    return (
        <div>
            <h1>Hack4Impact UMD</h1>
            <p>Hack4Impact-UMD is a group of University of Maryland students who work with local and national non-profits to create software that improves the world around us. We also dicuss ethical technology, have talks about using technology for social good, and have fun! This club was founded in 2020 and is a chapter of the Hack4Impact, a national 501(c)3 organization.</p>
            <h1>Our Projects</h1>

            {/* maps through the projects and returns a Project element to display, passing in attributes of the project */}
            {projs.map(proj => {
                return (
                    <Project 
                        title = {proj.title}
                        description = {proj.description}
                        members = {proj.members}
                    />
                )
            })}  
        </div>
    );
}

export default Home;