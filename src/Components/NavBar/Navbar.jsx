import React, { useContext, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import CV from '../../Assets/Tanmoy_Roy_Resume.pdf'
import './Navbar.css'

import {
    UilEstate, UilUser, UilTimes, UilApps, UilMoon, UilSun,
    UilFileDownload, UilBriefcaseAlt, UilMessage, UilCog
} from '@iconscout/react-unicons'
import { ThemeContext } from '../../Contexts/ThemeContext';




const Navbar = () => {
    const [theme, setTheme] = useContext(ThemeContext);



    /* ==== this is for toggle menu buttons ==== */
    const [toggleMenu, setToggleMenu] = useState(false);

    const themeToggle = () => {
        if (theme === 'light') {
            setTheme('dark');

        }
        else if (theme === 'dark') {
            setTheme('light');

        }
    }

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
                    duration={100}
                >Tanmoy<span>.me</span></Link>

                <div className={toggleMenu ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="menu-items grid">
                        <li ><Link
                            className='nav-link home'
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
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
                            duration={100}
                        ><UilUser className='nav-icon' />About</Link></li>
                        <li ><Link
                            className='nav-link skills'
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                        ><UilCog className='nav-icon' />Skills</Link></li>
                        <li ><Link
                            className='nav-link projects'
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={100}
                        ><UilBriefcaseAlt className='nav-icon' />Projects</Link></li>
                        <li ><Link
                            className='nav-link contact'
                            activeClass="active"
                            to="contact"
                            spy={true} useCSSVariables
                            smooth={true}
                            offset={-70}
                            duration={100}
                        ><UilMessage className='nav-icon' />Contact</Link></li>
                        <li><a className='resume-link-1 nav-link resume' download={"Tanmoy-Roy-Resume"} href={CV} id="resume-link-1"><UilFileDownload className='nav-icon' />Resume</a></li>
                        <li><button className='theme-btn' onClick={() => themeToggle()}>{theme === 'light' ? <UilMoon className='themeIcon' /> : <UilSun className='themeIcon' />}</button></li>

                    </ul>
                    <UilTimes className='nav-close' onClick={() => setToggleMenu(!toggleMenu)} />
                </div>
                <div className="nav-toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                    <UilApps />
                </div>

            </nav>
        </header>
    )
}

export default Navbar





