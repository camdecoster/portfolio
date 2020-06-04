// React
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faNodeJs,
    faLinkedin,
    faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

// Configuration
import "./App.css";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../NavBar/NavBar";
import ProjectListing from "../ProjectListing/ProjectListing";

// Images
import DenverSkyline from "../../images/denver-skyline.png";
import DttFrontpage from "../../images/dtt_frontpage_large.png";
import EtFrontpage from "../../images/dashboard_categories.png";
import QuizFrontpage from "../../images/futurama_frontpage_large.png";

export default function App() {
    // Add Font Awesome icons to library for use in other components
    library.add(
        faHtml5,
        faCss3Alt,
        faJsSquare,
        faReact,
        faNodeJs,
        faLinkedin,
        faGithubSquare,
        faEnvelopeSquare
    );

    return (
        <div className='App gray'>
            <div className='top-accent-bar'></div>
            <header id='header' className='header dark'>
                <p className='name blue-under font-01'>Cameron DeCoster</p>
                <p className='job-title'>SOFTWARE ENGINEER</p>
            </header>
            <NavBar />
            <main>
                <section id='about' className='about'>
                    <h1 id='hero-quote' className='body-text font-01'>
                        My name is Cameron DeCoster. I'm an aspiring software
                        engineer with some mechanical engineer mixed in.
                    </h1>
                    <img
                        className='hero-pic pic'
                        alt='black and white silhouette of denver skyline'
                        src={DenverSkyline}
                    />
                    <br />
                    <p>
                        I'm currently finishing the web developer track at Bloc.
                        My focus is on learning semantic HTML, CSS, JavaScript,
                        React, Node, and Express. I love solving puzzles and
                        learning. I've done that for the last 13 years as a
                        mechanical engineer and I look forward to continuing
                        that work as part of a software engineering team. When
                        I'm not designing power plants and writing code, I spend
                        my time trying to keep up with my kids and enjoying the
                        beautiful state of Colorado. I also keep trying to get
                        Linux working on my laptop.
                    </p>
                </section>
                <section id='projects' className='projects'>
                    <div className='body-text heading-container'>
                        <h1 className='heading'>PROJECTS</h1>
                    </div>
                    <ProjectListing
                        name='Expense Tracker'
                        icons={[
                            {
                                title: "HTML5",
                                info: ["fab", "html5"],
                            },
                            {
                                title: "CSS3",
                                info: ["fab", "css3-alt"],
                            },
                            {
                                title: "React",
                                info: ["fab", "react"],
                            },
                            {
                                title: "Node",
                                info: ["fab", "node-js"],
                            },
                        ]}
                        image={EtFrontpage}
                        summary={`Expense Tracker is an easy to use budgeting app that helps one keep track of their expenses and see trends over time. It's built using Node/Express/PostgreSQL for the backend and React for the frontend and includes authentication using JSON web tokens.`}
                        linkSite='https://expense-tracker-client.now.sh/'
                        linkRepo='https://github.com/camdecoster/expense-tracker-client/'
                    />
                    <ProjectListing
                        name='Down The Tubes'
                        icons={[
                            {
                                title: "HTML5",
                                info: ["fab", "html5"],
                            },
                            {
                                title: "CSS3",
                                info: ["fab", "css3-alt"],
                            },
                            {
                                title: "JavaScript",
                                info: ["fab", "js-square"],
                            },
                        ]}
                        image={DttFrontpage}
                        summary={`Down The Tubes is a site designed to help you find
                        old YouTube videos that you posted on your blog.
                        Just enter your blog address and see what comes up.`}
                        linkSite='https://camdecoster.github.io/down-the-tubes/'
                        linkRepo='https://github.com/camdecoster/down-the-tubes'
                    />
                    <ProjectListing
                        name='Multiple Choice Quiz'
                        icons={[
                            {
                                title: "HTML5",
                                info: ["fab", "html5"],
                            },
                            {
                                title: "CSS3",
                                info: ["fab", "css3-alt"],
                            },
                            {
                                title: "JavaScript",
                                info: ["fab", "js-square"],
                            },
                        ]}
                        image={QuizFrontpage}
                        summary={`Responsive multiple choice quiz app designed to test
                        your knowledge of the TV show Futurama. There's a
                        landing page, ten trivia questions - with images,
                        and a final summary. Test your knowledge of the
                        show, or at least enjoy all of the colorful
                        pictures.`}
                        linkSite='https://camdecoster.github.io/futurama-quiz/'
                        linkRepo='https://github.com/camdecoster/futurama-quiz'
                    />
                </section>
                <section id='contact' className='contact'>
                    <p>
                        I'd love to hear from you. For more information or if
                        you have questions, please use one of the following
                        links.
                    </p>
                    <p className='contact-links'>
                        <a
                            href='mailto:cameron.decoster@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Link to email'
                        >
                            <FontAwesomeIcon
                                className='faIcon'
                                title='Email'
                                icon='envelope-square'
                            />
                        </a>
                        <a
                            href='https://github.com/camdecoster'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Link to GitHub'
                        >
                            <FontAwesomeIcon
                                className='faIcon'
                                title='GitHub'
                                icon={["fab", "github-square"]}
                            />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/camerondecoster/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Link to LinkedIn'
                        >
                            <FontAwesomeIcon
                                className='faIcon'
                                title='LinkedIn'
                                icon={["fab", "linkedin"]}
                            />
                        </a>
                    </p>
                </section>
            </main>
        </div>
    );
}
