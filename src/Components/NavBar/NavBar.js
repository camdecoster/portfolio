// React
import React from "react";

// Configuration
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className='navbar dark' role='navigation'>
            <section className='navbar-cntr'>
                <a className='dark blue-under' href='#about'>
                    ABOUT
                </a>
                <a className='dark blue-under' href='#projects'>
                    PROJECTS
                </a>
                <a className='dark blue-under' href='#contact'>
                    CONTACT
                </a>
            </section>
        </nav>
    );
}
