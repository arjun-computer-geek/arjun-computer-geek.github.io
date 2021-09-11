import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [status, setStatus] = useState(false);

    const toggleHandler = () => {
        setStatus(!status);
    }
    return (
        <section id="header" style={{background: "#29323c"}} className={status ? 'active' : ''}>
            <div className="header container" >
                <div className="nav-bar">
                    <div className="brand">
                        <Link to="/"><h1><span>A</span>RJUN <span>K</span>UMAR</h1></Link>
                    </div>
                    <div className="nav-list" >
                        <div onClick={toggleHandler} className={`hamburger ${status ? 'active' : ''}`}>
                            <div className="bar" ></div>
                        </div>
                        <ul className={status ? 'active' : ''}>
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
