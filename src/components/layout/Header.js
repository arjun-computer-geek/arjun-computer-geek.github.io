import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section id="header" style={{background: "#29323c"}}>
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <Link to="/"><h1><span>A</span>RJUN <span>K</span>UMAR</h1></Link>
                    </div>
                    <div className="nav-list">
                        <div className="hamburger">
                            <div className="bar"></div>
                        </div>
                        <ul>
                            <li><Link to="/" data-after="Home">Home</Link></li>
                            <li><Link to="/projects" data-after="Projects">Projects</Link></li>
                            <li><Link to="/blogs" data-after="Services">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
