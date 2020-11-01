import React from 'react';
import {FAQ} from "../Nonprofits/FAQ";
import './index.css'
import Link from "next/link"

const Nonprofits = () => {
    return (
        <div>
            
            <div class = 'flex-container'>
                <div>
                    <h1>Nonprofits</h1>
                    <p>At Hack4Impact, we understand that nonprofit organizations 
                    are a valuable asset to our community. We want to use our software 
                    and web development skills to help nonprofits.</p>
                </div>
                <div>
                    <p>If you are interested in any technology development for your 
                    organization, please let us know by filling out the application or
                     contacting us! Our goal is to help your organization by providing 
                     software solutions.</p>

                    <button onclick='https://docs.google.com/forms/d/e/1FAIpQLSfaeqcwOGt3QR0h4Lmo-fwW4mA108jpeb0p06upiivwxpDArw/viewform' >Apply Now</button>
                </div>
            </div>

            <div class = 'timeline-section'>
                <h2>Application Process</h2>
                <ul>
                    <li>
                        <h3>Initial Contact</h3>
                        <h4>Early July</h4>
                        <p>Reach out to our team to get started in our application 
                        process! We are interested in hearing about your organization 
                        and potential projects you may have in mind.</p>
                    </li>

                    <li>
                        <h3>Informational Interview</h3>
                        <h4>Late July to Early August</h4>
                        <p>We will reach out to you to schedule an interview to discuss 
                        your project idea. We want to learn more about the problem, 
                        potential users, and additional factors that relate to your 
                        product.</p>
                    </li>

                    <li>
                        <h3>Project Selections</h3>
                        <h4>September</h4>
                        <p>The Hack4Impact board of directors will consider the 
                        feasibility of your project and how well it suits our teams and 
                        timeline. We want to ensure we are the right people to tackle 
                        your problem.</p>
                    </li>

                    <li>
                        <h3>Response</h3>
                        <h4>Late September</h4>
                        <p>We will let you know if we have chosen to take on your project. 
                        If we do not select it on one year, we highly encourage you to 
                        apply again. Since we are also a nonprofit organization, we face 
                        many similar resource limitations as you, but are constantly growing 
                        in size and funds.</p>
                    </li>
                </ul>
            </div>


            <FAQ>
               <question ask="What types of projects do you undertake?">
                  Most of the projects we undertake are web applications. Common examples
                  of problems we tackle include volunteer tracking forms, member directories,
                  and data tracking softwares. Check out our <Link href="/projects"><a>projects
                  page</a></Link> to see some of our previous work, and feel free to contact
                  us with any project ideas!
               </question>
               <question ask="How much does this cost?">
                  These projects are free or low cost ($5- $15 / month) for the website
                  and hosting expenses. We are building software to better help you
                  serve your community, and we know how tight money can be so we try to
                  keep these expenses as low as possible.
               </question>
               <question ask="What does the project timeline look like?">
                  Most development begins at the start of the new year and continues
                  until around mid-April. Throughout all of this, we will remain in
                  constant contact with you to ensure that we are building an application
                  that you will want to use.
               </question>
               <question ask="How much involvement is expected from nonprofits?">
                  We strongly believe in continuous and transparent communication to ensure
                  that your project is something that you will be happy with. This means we
                  will be asking for constant feedback throughout the development cycle,
                  including check-ins and surveys.
               </question>
               <question ask="How does long term maintenance work?">
                  Once we hand the product off to you around mid-April, we want to give you time
                  to experiment with it and find anything that needs to be changed. Once we end
                  our school year in mid-June, we will no longer be able to make additions as easily
                  due to limited resources on our end. If you encounter bugs on the site, we will
                  attempt to correct these issues, but cannot guarantee that we will be able to.
               </question>
            </FAQ>
        </div>
    )
}
export default Nonprofits;