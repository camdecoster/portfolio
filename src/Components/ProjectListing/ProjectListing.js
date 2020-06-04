// React
import React from "react";

// Configuration
import "./ProjectListing.css";

// Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectListing(props) {
    const icons = props.icons.map((icon) => (
        <FontAwesomeIcon
            className='faIcon'
            title={icon.title}
            key={icon.title}
            icon={icon.info}
        />
    ));
    console.log(props.icons);

    return (
        <section id='ProjectListing' className='body-text'>
            <h3 className='proj-text'>{props.name}</h3>
            <img
                className='dtt-pic proj-pic'
                alt='screenshot of down the tubes web page'
                src={props.image}
            />
            <p className='proj-text'>{icons}</p>
            <p className='proj-text'>{props.summary}</p>
            <div className='project-links proj-text'>
                <a
                    className='btn-link btn light btn-demo'
                    href={props.linkSite}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    View Site
                </a>
                <a
                    className='btn-link btn light btn-code'
                    href={props.linkRepo}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    View Code
                </a>
            </div>
        </section>
    );
}