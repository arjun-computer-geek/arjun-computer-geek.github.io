import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from './layout/MetaData'
import Project from './layout/ProjectTemplate'

const Projects = () => {
    return (
        <>
            <MetaData title={'Projects'}/>
            <section id="projects">
                <div className="projects container">
                    <div className="projects-head">
                        <h1 className="section-title">MY <span> PROJECTS</span></h1>
                    </div>
                    <div className="all-projects">

                        <Project
                            liveLink={`https://replit.com/@arjun-computer/CLI-Game-Mark-1?v=1`} 
                            srcLink={`https://github.com/arjun-computer-geek/CLI-Game-Mark-1`} 
                            heading1={`CLI Quiz Game`} 
                            heading2={`Fun to play`} 
                            para={`It is basic CLI Quiz Game`} 
                            imgsrc={`./img/project3.JPG`}
                        />
                        
                        <Project
                            liveLink={`https://react-chat.arjun-computer-geek.me/`} 
                            srcLink={`https://github.com/arjun-computer-geek/react_chat_app`} 
                            heading1={`React Chat App`} 
                            heading2={`A Simple chat app`} 
                            para={`It is initial form of chat app. It can send only text and forgot the user after quit or close the browser.Any one can see the messages.`} 
                            imgsrc={`./img/project4.JPG`}
                        />

                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/eCommerceWebApp-FrontEnd/`} 
                            srcLink={`https://github.com/arjun-computer-geek/eCommerceWebApp-FrontEnd`} 
                            heading1={`Ecommerce Web App - FrontEnd`} 
                            heading2={`A multi-pages Ecommerc webApp - FrontEnd`} 
                            para={`It is fully responsive web app frontend. It has more than one landing pages. It has nice UI.`} 
                            imgsrc={`./img/project7.JPG`}
                        />

                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/react-calculator/`} 
                            srcLink={`https://github.com/arjun-computer-geek/react-calculator`} 
                            heading1={`React Calculator`} 
                            heading2={`Awsome And Simple User Interface`} 
                            para={`It is simple calculator. It is made up of ReactJs.`} 
                            imgsrc={`./img/project1.PNG`}
                        />


                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/simple_text_editor/`} 
                            srcLink={`https://github.com/arjun-computer-geek/simple_text_editor`} 
                            heading1={`Basic Text editor`} 
                            heading2={`A simple text editor for basic text editing.`} 
                            para={`It is a simple text editor. It can do bold, italic, underlien, super script, sub script, inser ordered and unordered list.`} 
                            imgsrc={`./img/project6.JPG`}
                        />

                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/amazon-clone/`} 
                            srcLink={`https://github.com/arjun-computer-geek/amazon-clone`} 
                            heading1={`Amazon Clone - FrontEnd`} 
                            heading2={`A basic template - Amazon clone `} 
                            para={`A fully responsive Amazon clone frontend. A basic template with appear or disappear sidebars.`} 
                            imgsrc={`./img/project5.JPG`}
                        />

                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/profile-card/`} 
                            srcLink={`https://github.com/arjun-computer-geek/profile-card`} 
                            heading1={`Profile Card`} 
                            heading2={`Simple showcase of a card using Only HTML & CSS`} 
                            para={`It is simple self assigned project to learn to make a beautiful looking card.`} 
                            imgsrc={`./img/project2.PNG`}
                        />

                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/RGB-Color-Mixer/`} 
                            srcLink={`https://github.com/arjun-computer-geek/RGB-Color-Mixer`} 
                            heading1={`Colour Mixer`} 
                            heading2={`Rgb Colour mixer.`} 
                            para={`We can use the rgb value for designing. We can mix colour from scroller and get rgb value.`} 
                            imgsrc={`./img/project8.JPG`}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
