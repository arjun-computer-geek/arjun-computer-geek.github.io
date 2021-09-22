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
                            <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                            <h2>Website Design & Re-design</h2>
                            <p>I Design a new website as well as Re-design old website.I can modify your website as per your needs.</p>
                        </div>

                        <div className="services-item">
                            <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                            <h2>Html5 Website Development</h2>
                            <p>All HTML5-based web app solutions built by me are both secure and sustainable, constructed in such a way they can be easily maintained and scaled as needed.</p>
                        </div>

                        <div className="services-item">
                            <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                            <h2>Responsive Design</h2>
                            <p>Customer-focused, creating mobile-friendly responsively designed experiences that deliver tangible business results, I helps brands navigate any and all facets of the digital landscape.</p>
                        </div>

                        <div className="services-item">
                            <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                            <h2>Contentfull Development</h2>
                            <p>Client-focused, customer-centric, creating digital solutions that deliver tangible business results, I help brands achieve more in the ever-changing digital landscape.</p>
                        </div>

                        <div className="services-item">
                            <div className="icon"><i className="fa fa-cogs fa-3x"></i></div>
                            <h2>eCommerce Development</h2>
                            <p>eCommerce development services that are customer-focused, creating e-shopping experiences deliver tangible business results, I help brands navigate any and all facets of the digital commerce landscape.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
