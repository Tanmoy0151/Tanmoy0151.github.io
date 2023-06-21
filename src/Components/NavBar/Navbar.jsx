import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'

import {
    UilEstate, UilUser, UilTimes, UilApps,
    UilFileAlt, UilBriefcaseAlt, UilMessage, UilCog
} from '@iconscout/react-unicons'



const Navbar = () => {

    /* ==== this is for toggle buttons ==== */
    const [toggle, setToggle] = useState(false);


    return (
        <header className='header'>
            <nav className="nav container">
                <Link
                    className="nav-logo"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Tanmoy</Link>

                <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="menu-items grid">
                        <li ><Link
                            className='nav-link home'
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <UilEstate className='nav-icon' />
                            Home</Link></li>
                        <li ><Link
                            className='nav-link about'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><UilUser className='nav-icon' />About</Link></li>
                        <li ><Link
                            className='nav-link skills'
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><UilCog className='nav-icon' />Skills</Link></li>
                        <li ><Link
                            className='nav-link projects'
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><UilBriefcaseAlt className='nav-icon' />Projects</Link></li>
                        <li ><Link
                            className='nav-link contact'
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><UilMessage className='nav-icon' />Contact</Link></li>
                        <li className='nav-link resume'><UilFileAlt className='nav-icon' />Resume</li>
                    </ul>
                    <UilTimes className='nav-close' onClick={() => setToggle(!toggle)} />
                </div>
                <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
                    <UilApps />
                </div>

            </nav>
        </header>
    )
}

export default Navbar





