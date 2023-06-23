import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.css'
const Footer = () => {
    return (
       <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Tanmoy</h1>
            <ul className="footer-list">
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
        </div>
       </footer>
    )
}

export default Footer