import React from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import './Blogs.css'

const Blogs = () => {
    return (
        <>
            <MetaData title={'Blogs'} />
            <section id="blogs">
                <div className="container services">
                    <div className="services-head">
                        <h1 className="section-title">BLOG<span>S</span></h1>
                        <p>I wrote some blogs on  tech related Topics. It helps me document my journey of learning. Go and check it out. 👇👇👇👇 </p>
                    </div>
                    <div className="services-body">

                        <Link  className="blog-link" style={{ border: "none" }} to="/arch_guide">
                            <div className="services-item">
                                <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                                <h2>Arch Installation Guide</h2>
                                <p>A Simple and Step By Step Installation Guide to install Arch Linux along with the Windows 10 [Dual boot].</p>
                            </div>
                        </Link>

                        <Link className="blog-link"  style={{ border: "none" }} to="/important-linux-command">
                            <div className="services-item">
                                <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                                <h2>Important Linux Command</h2>
                                <p>A guide for important linux command</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
