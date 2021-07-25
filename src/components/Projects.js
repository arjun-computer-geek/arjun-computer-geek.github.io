import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from './layout/MetaData'

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
                        <div className="project-item">
                            <div className="project-info">
                                <div className="view-btn">
                                    <Link to={{pathname: "https://arjun-computer-geek.me/react-calculator/"}} target="_blank">View</Link>
                                    <Link to={{pathname: "https://github.com/arjun-computer-geek/react-calculator"}} target="_blank">View Codes</Link>
                                </div>

                                <h1>React Calculator</h1>
                                <h2>Awsome And Simple User Interface</h2><br/>
                                <p>It is simple calculator. It is made up of ReactJs.</p>
                            </div>
                            
                            <div className="project-img">
                                <img src="./img/project1.PNG" alt="image"/>
                            </div>
                        </div>
                        <div className="project-item">
                            <div className="project-info">
                                <div className="view-btn">
                                    <Link to={{pathname: "https://arjun-computer-geek.me/profile-card/"}} target="_blank">View</Link>
                                    <Link to={{pathname: "https://github.com/arjun-computer-geek/profile-card"}} target="_blank">View Codes</Link>
                                </div>
                                
                                <h1>Profile Card</h1>
                                <h2>Awsome</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi eveniet sed molestiae repellendus voluptas odio mollitia voluptate, quae dicta asperiores nisi alias sit quasi beatae amet! Laborum, voluptatum dolorem?</p>
                            </div>
                            <div className="project-img">
                                <img src="./img/project2.PNG" alt="image"/>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
