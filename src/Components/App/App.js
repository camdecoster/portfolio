// React
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCss3Alt,
    faGithubSquare,
    faHtml5,
    faJsSquare,
    faNodeJs,
    faLinkedin,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faFile } from "@fortawesome/free-solid-svg-icons";

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
import QbFrontpage from "../../images/dashboard_quiz_table.png";
import QuizFrontpage from "../../images/futurama_frontpage_large.png";

export default function App() {
    // Add Font Awesome icons to library for use in other components
    library.add(
        faCss3Alt,
        faGithubSquare,
        faHtml5,
        faJsSquare,
        faNodeJs,
        faLinkedin,
        faReact,
        faEnvelopeSquare,
        faFile
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
                        My name is Cameron DeCoster. I'm a software engineer and
                        I love solving puzzles.
                    </h1>
                    <img
                        className='hero-pic pic'
                        alt='black and white silhouette of denver skyline'
                        src={DenverSkyline}
                    />
                    <br />
                    <p>
                        My focus is on building projects using JavaScript,
                        React, Vue, Angular, Node, Python, and anything else I
                        can try out. I continue to learn about new languages and
                        technologies every day. I love problem solving and
                        building things. I've done that for over 14 years as an
                        engineer and I'd love to join your team and help out.
                        When I'm not writing code, I spend my time trying to
                        keep up with my kids and enjoying the beautiful state of
                        Colorado. I also keep trying to find the best Linux
                        distribution for my laptop (currently Debian; go
                        stability!). Check out some of my projects below and get
                        in touch if you have any questions.
                    </p>
                </section>
                <section id='projects' className='projects'>
                    <div className='body-text heading-container'>
                        <h1 className='heading'>PROJECTS</h1>
                    </div>
                    <ProjectListing
                        name='Quiz Builder'
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
                        image={QbFrontpage}
                        summary={`Quiz Builder is a site that helps you create simple multiple choice quizzes and share them with your friends. Each quiz can have up to 20 questions and each question can have up to 8 answer choices. It's built using Node/Express/PostgreSQL for the backend and React for the frontend and includes authentication using JSON web tokens.`}
                        linkSite='https://quiz-builder-client.vercel.app'
                        linkRepo='https://github.com/camdecoster/quiz-builder-client'
                    />
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
                                className='faIcon grow_big'
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
                                className='faIcon grow_big'
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
                                className='faIcon grow_big'
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
