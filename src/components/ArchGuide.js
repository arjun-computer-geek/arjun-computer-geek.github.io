import React from 'react'
import MetaData from './layout/MetaData'
import './ArchGuide.css'
import { Link } from 'react-router-dom'

const ArchGuide = () => {
    return (
        <>
            <MetaData title={'Arch Installation'}/>
            <section className="blogs" style={{body: 'white'}}>
                <div className="arch_blog">
                    <h1>How to install Arch Linux along with Winodws10 (Dual Boot)</h1>
                    <img className="thumbnail" src="/img/arch_thumbnail.png" alt="arch_thumbnail"/>
                    <h3>Arjun Kumar </h3>
                    <span>July, 2021</span>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        <b><Link to={{pathname: "https://archlinux.org/"}} target="_blank">Arch Linux </Link></b>
                        is a lightweight and flexible linux distribution. It works on KISS(Keep it Simple & Stupid) Principal and rolling release.
                    </p>
                    <br/>
                    <br/>
                    <p>
                        Hey! Here We are going to install arch linux along with windows 10 with dual boot. A step by step guide. Please follow all the steps carefully & read instructions before run any commands otherwise it can harm your system or You may loose all your data. 🙏   
                    </p>
                    <br/>
                    <br/>
                    <p className="warning">
                        <strong><code>Warning!</code></strong>
                        In this methods we will do wipe or formate disk. If any mistake happed then you will loose your all data so Please before follow these steps backup your data. 🙏🙏 
                    </p>
                    <br/>
                    <br/>
                    <p className="info">
                        <strong>Requirements for installing Arch Linux</strong><br/>
                        – A x86_64 (i.e. 64 bit) compatible machine<br/>
                        – Minimum 512 MB of RAM (recommended 2 GB)<br/>
                        – At least 2 GB of free disk space (recommended 20 GB <br/>
                        &nbsp;&nbsp;&nbsp;for basic usage with a desktop environment)<br/>
                        – An active internet connection<br/>
                        – A USB drive with minimum 2 GB of storage capacity<br/>
                        – Familiarity with Linux command line<br/>
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Step 1 : Download the Arch Linux Iso</h2>
                    <br/>
                    <p>
                        Download the ISO from the <Link to={{pathname:"https://archlinux.org/download/"}} target="_blank"> Arch Linux download page</Link>. You can download <i>directly via link</i> or via <i>Bitorrent</i>.
                    </p>
                    <br/>
                    <h2>Step 2 : Create a live USB</h2>
                    <br/>
                    <p>To create a live usb the easiest method is to create via rufus software. <br/> <b style={{textAlign: 'center'}}>or</b> 
                        <p> For more methods you can check <Link to={{pathname: "https://wiki.archlinux.org/title/USB_flash_installation_medium"}} target="_blank"> USB installation medium page.</Link> </p>
                    </p>
                    <br/>
                    <div>
                        <p>
                            <strong>Creating Bootable Device via rufus : </strong>
                            <br/>
                                &nbsp; - First of all You need a USB drive which is empty.
                            <br/>
                                &nbsp; - Download <Link to={{pathname: "https://rufus.ie/en_US/"}} target="_blank">Rufus.</Link>
                            <br/>
                                &nbsp; - Run downloaded exe. Then You will see something like this. 👇👇👇 
                            <br/>
                                &nbsp; - Then Click Start.
                            <br/>
                            <br/>
                            <img style={{width: '100%', borderRadius: '10px'}} src="/img/rufus_img.JPG" alt={`installation-img`}/>
                            <br/>
                            <br/>
                        </p>
                        <p className="note">
                            <strong>Note : </strong>
                            <br/>
                                &nbsp; - Please Check Partition Scheme to GPT.
                            <br/>
                                &nbsp; - Please Check Target System to UEFI.
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <h2>Step 3 : Create a Partition for Linux</h2>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArchGuide
