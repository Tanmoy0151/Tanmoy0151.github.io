import React from 'react'
import { Link } from 'react-scroll'

const Data = () => {
    return (
        <div className="home-data">
            <h1 className="home-title">Tanmoy Roy</h1>
            <h3 className="home-subtitle">Full-Stack Web Developer</h3>
            <p className="home-description">
                I am a full-stack developer with experience in developing applications and developing applications with React components and components that integrate with React components.
            </p>

            <Link to="contact" className="button button--flex">
                Say hello to me
            </Link>
        </div>
    )
}

export default Data