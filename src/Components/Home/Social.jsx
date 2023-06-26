import React from 'react'
import { SiGithub, SiLinkedin, SiMinutemailer } from "react-icons/si";
const Social = () => {
    return (
        <div className="home-social">
            <a href="https://github.com/Tanmoy0151" className="home-social-icon" target='_blank'><SiGithub /></a>
            <a href="https://www.linkedin.com/in/tanmoy-roy-28b081253/" className="home-social-icon" target='_blank'><SiLinkedin /></a>
            <a href="mailto:roytanmoy662@gmail.com" className="home-social-icon" target='_blank'><SiMinutemailer /></a>
        </div>
    )
}

export default Social