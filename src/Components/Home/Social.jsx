import React from 'react'
import { UilGithub, UilLinkedin, UilAt } from '@iconscout/react-unicons'
const Social = () => {
    return (
        <div className="home-social">
            <a href="https://github.com/Tanmoy0151" className="home-social-icon" target='_blank'><UilGithub /></a>
            <a href="https://www.linkedin.com/in/tanmoy-roy-28b081253/" className="home-social-icon" target='_blank'><UilLinkedin /></a>
            <a href="mailto:roytanmoy662@gmail.com" className="home-social-icon" target='_blank'><UilAt /></a>
        </div>
    )
}

export default Social