import React from 'react'
import MetaData from '../layout/MetaData'
import Project from '../layout/ProjectTemplate'

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
                            liveLink={`https://react-chat-app-arjun.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/react_chat_app.git`}
                            heading1={`React Chat App`}
                            heading2={`Made with ReactJS, socket.io and express`}
                            para={`You can chat globally.`}
                            imgsrc={`./img/reactchatapp.PNG`}
                        />
                        <Project
                            liveLink={`https://fabelleui.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fabelle-ui.git`}
                            heading1={`Fabelle UI`}
                            heading2={`Made with HTML, CSS and JS`}
                            para={`This ia a component Library like bootstrap.`}
                            imgsrc={`./img/fabelleui.PNG`}
                        />
                        <Project
                            liveLink={`https://fabtube.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fabtube.git`}
                            heading1={`Fabtube`}
                            heading2={`Made with React, contextAPI, and MirajJs`}
                            para={`This App is very similar to the YouTube.`}
                            imgsrc={`./img/fabtube.PNG`}
                        />
                        <Project
                            liveLink={`https://fab-linkedin.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fab-linkedin.git`}
                            heading1={`Fab LinkedIn`}
                            heading2={`Made with React, Redux-toolkit, styled component, firebase`}
                            para={`This is social media plateform like linkedIn`}
                            imgsrc={`./img/fablinkedin.PNG`}
                        />
                        <Project
                            liveLink={`https://fabelle-learn-react.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fabelle-learn-react.git`}
                            heading1={`Fabelle Learn`}
                            heading2={`Made with React, ContextAPI, css, Express, Mongodb`}
                            para={`This is Ecommerce liek app for selling courses`}
                            imgsrc={`./img/fabellelearn.PNG`}
                        />
                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/react-calculator/`}
                            srcLink={`https://github.com/arjun-computer-geek/react-calculator.git`}
                            heading1={`Calculator`}
                            heading2={`Made with React, JavaScript`}
                            para={`It can perform basic operation of calculas`}
                            imgsrc={`./img/calculator.PNG`}
                        />
                        <Project
                            liveLink={`https://fabelle-quiz.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fabelle-quiz.git`}
                            heading1={`Fabelle Learn`}
                            heading2={`Made with HTML, CSS, JS`}
                            para={`A Quiz app`}
                            imgsrc={`./img/fabellequiz.PNG`}
                        />
                        <Project
                            liveLink={`https://distracted-noether-a6fab6.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/stock-app.git`}
                            heading1={`Stock App`}
                            heading2={`Made with vanila Js`}
                            para={`An app which will clculate profit and los and its percentage in stock.`}
                            imgsrc={`./img/project11.JPG`}
                        />
                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/is-your-birthday-palindrome/`}
                            srcLink={`https://github.com/arjun-computer-geek/is-your-birthday-palindrome.git`}
                            heading1={`Is Your Birthday Palindrome`}
                            heading2={`Made with vanila Js`}
                            para={`An app which will check the is your birthday palindrome or not? And return the next palindrome date.`}
                            imgsrc={`./img/project10.JPG`}
                        />
                        <Project
                            liveLink={`https://youthful-varahamihira-746096.netlify.app/`}
                            srcLink={`https://github.com/arjun-computer-geek/fun-with-triangle.git`}
                            heading1={`Fun with triangle`}
                            heading2={`Made with the react js.`}
                            para={`An app made with reactJs. Using BrowserRouter, Router, Route etc.`}
                            imgsrc={`./img/project9.PNG`}
                        />
                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/is-your-birthday-lucky/`}
                            srcLink={`https://github.com/arjun-computer-geek/is-your-birthday-lucky.git`}
                            heading1={`Is Your Birthday Lucky?`}
                            heading2={`Made with Vanilla JavaScript.`}
                            para={`An app which check wheather your birthday is lucky or not.`}
                            imgsrc={`./img/project8.png`}
                        />
                        <Project
                            liveLink={`https://arjun-computer-geek.github.io/cash-register/`}
                            srcLink={`https://github.com/arjun-computer-geek/cash-register.git`}
                            heading1={`Cash register`}
                            heading2={`Made with Vanilla JavaScript`}
                            para={`An app to help for give the change to the customer.`}
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
                            para={`An app made with reactjs which interpret as well as show the name of emoji present in our database.`}
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
