import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from './layout/MetaData'
import './Blogs.css'

const Blogs = () => {
    return (
        <>
            <MetaData title={'Blogs'}/>
            <section id="blogs">
                <div className="container services">
                    <div className="services-head">
                        <h1 className="section-title">BLOG<span>S</span></h1>
                        <p>I wrote some blogs on  tech related Topics. It helps me document my journey of learning. Go and check it out. 👇👇👇👇 </p>
                    </div>
                    <div className="services-body">

                        <div className="services-item">
                            <Link style={{border: "none"}} to="/arch_guide">
                                <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                                <h2>Arch Installation Guide</h2>
                                <p>A Simple and Step By Step Installation Guide to install Arch Linux along with the Windows 10 [Dual boot].</p>
                            </Link>
                        </div>

                        <div className="services-item">
                            <Link style={{border: "none"}} to="/arch_guide">
                                <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                                <h2>Arch Installation Guide</h2>
                                <p>A Simple and Step By Step Installation Guide to install Arch Linux along with the Windows 10 [Dual boot].</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
