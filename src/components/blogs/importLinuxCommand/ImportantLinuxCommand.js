import React from 'react';
import Code from '../../layout/Code';
import MetaData from '../../layout/MetaData';
import './ImportantLinxuCommand.css';

const ImportantLinuxCommand = () => {
    return (
        <>
            <MetaData title={'Arch Installation'} />
            <section className="blogs">
                <div className="linux-command-blog" >
                    <h1>Important Linux Commands</h1>
                    <img className="thumbnail" src="/img/linux.jpg" alt="arch_thumbnail" />
                    <p>
                        Here we have some important Linux commands. After reading and practicing this. You can use any linux distribution using command prompt.
                    </p>
                    <h3>Arjun Kumar </h3>
                    <span>September, 2021</span>
                    <p>
                        <h2>Let's Command Your Terminal</h2>
                        <p className="note">
                            <strong>Note : </strong> Linux commands are case-sensitive.
                        </p>
                        <p>
                            <h2>1. pwd</h2>
                            The <b>P</b>rint <b>w</b>orking <b>d</b>irectory command is used to display the location of the current working directory.
                            <Code code={`$ pwd\n/home/arjun`} />
                        </p>
                        <p>
                            <h2>2. cd</h2>
                            <b>C</b>hange <b>d</b>directory command is used to change the working directory.
                            <Code code={`$ pwd/ \n/home/arjun \n$ cd music \n$ pwd \n/home/arjun/music`} />
                            You can even change to <code>/</code> directory
                            <Code code={`$ cd / \n$ pwd \n/`} />
                            or ~ to back your home directory
                            <Code code={`$ cd ~ \n$ pwd \n/home/arjun`} />
                            <p className="note">
                                <strong>Note : </strong> There is also a directory "root" (as word) for superuser's home which is different from root / directory. Actually, "root" directory is an immediate subdirectory of / root directory.
                            </p>
                            So you can try and observe.
                            <Code code={`$ cd / \n$ cd root \nbash: cd: root: Permission denied \n$ cd home \n$ pwd \n/home \n$ cd arjun \n$ pwd \n/home/arjun \n$ cd music \n$ pwd \n/home/arjun/music`
                                        } />
                        </p>
                    </p>
                </div>
            </section>
        </>
    )
}

export default ImportantLinuxCommand
