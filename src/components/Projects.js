import React from 'react'
import MetaData from './layout/MetaData'
import Project from './layout/ProjectTemplate'

const Projects = () => {
    return (
        <>
            <MetaData title={'Projects'} />
            <section id="projects">
                <div className="projects container">
                    <div className="projects-head">
                        <h1 className="section-title">MY <span> PROJECTS</span></h1>
                    </div>
                    <div className="all-projects">
                        <Project
                            liveLink={`https://youthful-varahamihira-746096.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fun-with-triangle.git`}
                            heading1={`Fun with triangle`}
                            heading2={`Made with the react js.`}
                            para={`A app made with reactJs. Using BrowserRouter, Router, Route etc.`}
                            imgsrc={`./img/project9.png`}
                        />
                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/is-your-birthday-lucky/`}
                            srcLink={`https://github.com/arjun-computer-geek/is-your-birthday-lucky.git`}
                            heading1={`Is Your Birthday Lucky?`}
                            heading2={`Made with Vanilla JavaScript.`}
                            para={`A app which check wheather your birthday is lucky or not.`}
                            imgsrc={`./img/project8.png`}
                        />
                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/cash-register/`}
                            srcLink={`https://github.com/arjun-computer-geek/cash-register.git`}
                            heading1={`Cash register`}
                            heading2={`Made with Vanilla JavaScript`}
                            para={`A app to help for give the change to the customer.`}
                            imgsrc={`./img/project7.png`}
                        />

                        <Project
                            liveLink={`https://awesome-borg-c4ff4c.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/movie-recommendation-app.git`}
                            heading1={`Movie Recommendation App`}
                            heading2={`Made with ReactJs and hooks`}
                            para={`A movie recommendation app that help you to choose the movies on the basis of its gener.`}
                            imgsrc={`./img/project6.png`}
                        />

                        <Project
                            liveLink={`https://stoic-pike-a07176.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/react-emoji-interpreter.git`}
                            heading1={`React Emoji interprater`}
                            heading2={`Made with react and hooks`}
                            para={`A app made with reactjs which interpret as well as show the name of emoji present in our database.`}
                            imgsrc={`./img/project5.png`}
                        />

                        <Project
                            liveLink={`https://compassionate-carson-43f6ab.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/groot-translator.git`}
                            heading1={`Groot Translator app`}
                            heading2={`Fun to Translate`}
                            para={`Let's talk in groot language.`}
                            imgsrc={`./img/project4.png`}
                        />

                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/banana-translation/`}
                            srcLink={`https://github.com/arjun-computer-geek/banana-translation.git`}
                            heading1={`Banana Translator app`}
                            heading2={`Fun to Translate`}
                            para={`Used mock api. Fun to translate.`}
                            imgsrc={`./img/project3.png`}
                        />


                        <Project
                            liveLink={`https://replit.com/@arjun-computer/Levezero-CLI-Game-Mark-2?v=1`}
                            srcLink={`https://github.com/arjun-computer-geek/level-zero-CLI-game-mark-2.git`}
                            heading1={`CLI Quiz Game`}
                            heading2={`Fun to play`}
                            para={`It is basic CLI Quiz Game`}
                            imgsrc={`./img/project2.jpg`}
                        />

                        <Project
                            liveLink={`https://replit.com/@arjun-computer/CLI-Game-Mark-1?v=1`}
                            srcLink={`https://github.com/arjun-computer-geek/CLI-Game-Mark-1`}
                            heading1={`CLI Quiz Game`}
                            heading2={`Fun to play`}
                            para={`It is basic CLI Quiz Game`}
                            imgsrc={`./img/project1.JPG`}
                        />


                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
