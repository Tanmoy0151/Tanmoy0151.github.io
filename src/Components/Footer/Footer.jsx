import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.css'
import { SiGithub, SiLinkedin, SiMinutemailer } from "react-icons/si";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Tanmoy</h1>
                <ul className="footer-list">
                    <li>
                        <Link
                            className="footer-link"
                            activeClass="home"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</Link>
                    </li>
                    <li>
                        <Link
                            className="footer-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                    </li>

                    <li>
                        <Link
                            className="footer-link"
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Projects</Link>
                    </li>

                </ul>
                <div className="footer-social">
                    <a href="https://github.com/Tanmoy0151" className="footer-social-link" target='_blank'><SiGithub /></a>
                    <a href="https://www.linkedin.com/in/tanmoy-roy-28b081253/" className="footer-social-link" target='_blank'><SiLinkedin /></a>
                    <a href="mailto:roytanmoy662@gmail.com" className="footer-social-link" target='_blank'><SiMinutemailer /></a>

                </div>
                <span className="footer-copy">&#169;Tanmoy,All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer