import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer container">
                <div className="brand"><h1><span>A</span>rjun <span>K</span>umar</h1></div>
                <h2>Full Stack Web Developer</h2>
                <div className="social-media">
                    <h1>FOLLOW ME ON SOCIAL MEDIAS</h1>
                    <div className="social-icons">
                        <Link to={{pathname : "https://www.facebook.com/profile.php?id=100018911007097"}} target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
                        <Link to={{pathname : "https://api.whatsapp.com/send?phone=919608544916"}} target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
                        <Link to={{pathname : "https://www.instagram.com/arjun_computer_geek/"}} target="_blank" className="insta"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        <Link to={{pathname : "https://twitter.com/arjun_comp_geek?s=09"}} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                        <Link to={{pathname : "https://github.com/arjun-computer-geek/"}} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></Link>
                        <Link to={{pathname : "https://www.linkedin.com/in/arjun-kumar-a752731a2"}} target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <p>Copyright &copy; 2020 Arjun. All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer
