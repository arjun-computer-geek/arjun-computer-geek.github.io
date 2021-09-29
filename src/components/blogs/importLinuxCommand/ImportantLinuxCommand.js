import React from 'react';
import Code from '../../layout/Code';
import MetaData from '../../layout/MetaData';
import './ImportantLinxuCommand.css';

const ImportantLinuxCommand = () => {
    return (
        <>
            <MetaData title={'Linux Important Commands'} />
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
                            <Code code={`$ cd / \n$ cd root \nbash: cd: root: Permission denied \n$ cd home \n$ pwd \n/home \n$ cd arjun \n$ pwd \n/home/arjun \n$ cd music \n$ pwd \n/home/arjun/music`} />
                            To go up to the parent directory, we have special symbol of two dots ..
                            <Code code={`$ pwd \n/home/arjun/music \n$ cd .. \n/home/arjun \n$ cd .. \n/home`} />
                        </p>
                        <p>
                            <h2>3. mkdir</h2>
                            mkdir command makes directories, if they do not exist.
                            <Code code={`$ pwd/ \n/home/arjun \n$ mkdir linux-commands \n$ cd linux-commands \n$ pwd \n/home/arjun/linux-commands`} />
                            we can even create multiple directories
                            <Code code={`$ cd /tmp \n$ pwd   \n/tmp \n$ mkdir universe galaxy  \n$ cd universe \n$ pwd \n/tmp/universe \n$ cd .. \n$ cd galaxy \n$ pwd \n/tmp/galaxy`} />
                        </p>
                        <p>
                            <h2>4. echo</h2>
                            echo displays its arguments back out again.
                            <Code code={`$ echo "Here you are!" \nHere you are!`} />
                            We can easily create small file by combining echo with redirect &gt; so that the output of echo is redirected to a file instead of standard output(screen).
                            <Code code={`$ cd /tmp/solar-system/earth \n$ echo "hey it's a pen to write or dig with." > msg.txt \n$ echo "easy to create a file" > msg2.txt \n$ whoami > user.txt`} />
                            <p className='note'>
                                <strong>NOTE : </strong>You can also use touch command to create a file.
                            </p>
                        </p>
                        <p>
                            <h2>5. ls</h2>
                            ls commands lists directory contents
                            <Code code={`$ pwd \n/tmp/solar-system/earth \n$ ls \nmsg.txt msg2.txt user.txt \n$ mkdir demo \n$ ls \ndemo msg.txt msg2.txt user.txt`} />
                            We can even redirect the output of ls to a file.
                            <Code code={`$ pwd \n/tmp/solar-system/earth \n$ ls > file-list.txt \n$ ls \ndemo file-list.txt msg.txt msg2.txt user.txt`} />
                            <p className='note'>
                                <strong>NOTE : </strong>We can use some switches with ls commands

                                <li >-l for long listing of directory contents</li>
                                <li>-a do not ignore entries starting with .</li>

                                man command prints reference manuals for almost every linux commands.
                            </p>
                            <Code code={`$ pwd \n/tmp/solar-system/earth \n$ ls -l \ndrwxrwxr-x. 3 arjun  arjun  1640 sept 22 17:17  demo \n-rw-rw-r--. 1 arjun  arjun  143309 sept 22 11:52  file-list.txt \n-rw-rw-r--. 1 arjun  arjun  2386871 sept 22 11:57  msg.txt \n-rw-rw-r--. 1 arjun  arjun  2386871 sept 22 11:57  msg2.txt \n-rw-rw-r--. 1 arjun  arjun  2669948 sept 22 12:26  user.txt`} />
                        </p>
                    </p>
                </div>
            </section>
        </>
    )
}

export default ImportantLinuxCommand
