import React from 'react'
import MetaData from './layout/MetaData'
import Project from './layout/ProjectTemplate'

const Projects = () => {
    return (
        <>
            <MetaData title={'Projects'}/>
            <section id="projects">
                <div className="projects container">
                    <div className="projects-head">
                        <h1 className="section-title">MY <span> PROJECTS</span></h1>
                    </div>
                    <div className="all-projects">

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
