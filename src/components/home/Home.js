import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'

const Home = () => {
    return (
        <>
            <MetaData title={'Arjun | Portfolio'}/>
            <section id="home-page">
                <div className="container home-page">
                    <div>
                        <h1>Hey,<span></span></h1> 
                        <h1>I am <span></span></h1>
                        <h1>Arjun <span></span></h1>
                        <Link to="/projects" type="button" className="portfolio-text">Portfolio</Link>
                    </div>
                </div>
            </section>

            <section  id="about">
                <div className="about container">
                    <div className="col-left">
                        <div className="about-img">
                            <img src="./img/profile.jpeg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-right">
                        <h1 className="section-title">About <span>me</span></h1>
                        <h2>Full Stack Web Developer</h2>
                        <p><br/>Hi there!, <br/>
                            I'm familiar with  HTML5 &amp; CSS3, JavaScript, NodeJs, Express, ReactJs, Git, Web Hosting and other Web technologies.<br/><br/>

                            <b>Thank You!</b><br/><br/>
                        </p>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="projects container">
                    <div className="projects-head">
                        <h1 className="section-title"><span> Pro</span>jects</h1>
                    </div>
                    <div className="all-projects">
                        <div className="project-item">
                            <p>Learn - Build - Showcase. That's what I like to do. You can browse my projects hosted online and it's source code.</p>
                            
                            <Link to="/projects" type="button">Browse</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blogs">
                <div className="container services">
                    <div className="services-head">
                        <h1 className="section-title">BLOG<span>S</span></h1>
                    </div>
                    <div className="services-body">
                        <p>I wrote some blogs on  tech related Topics. It helps me document my journey of learning. Go and check it out. 👇👇👇👇 </p>
                        <Link className="read" to="/blogs" type="button">Read</Link>
                        
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="contact container">
                    <div><h1 className="section-title">Contact <span>info</span></h1></div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon"><i className="fa fa-phone-square fa-5x" aria-hidden="true"></i></div>
                            <div className="contact-info">
                                <h2>Phone</h2>
                                <h3>+91 9608544916</h3>
                                
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon"><i className="fa fa-envelope fa-5x" aria-hidden="true"></i></div>
                            <div className="contact-info">
                                <h2>Email</h2>
                                <h3>arjun2000raj@gmail.com</h3>
                                
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon"><i className="fa fa-map-marker fa-5x" aria-hidden="true"></i></div>
                            <div className="contact-info">
                                <h2>Address</h2>
                                <h3>Bazar samiti, Patna, Bihar, India</h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
