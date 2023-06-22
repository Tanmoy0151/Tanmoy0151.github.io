import React from 'react'
import './Skills.css'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">My Skills</h2>
            <span className="section-subtitle">My Introduction</span>
            <div className="skills-container container grid">
                <FrontEnd />
                <BackEnd />
            </div>
        </section>
    )
}

export default Skills