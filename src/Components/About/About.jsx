import React from 'react'
import './About.css'
import { UilFileDownload } from '@iconscout/react-unicons'
import AboutImg from '../../Assets/about.jpg'
import CV from '../../Assets/Tanmoy_Roy_Resume.pdf'
import Info from './Info'
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">My Introduction</span>
            <div className="about-container container grid">
                <img src={AboutImg} alt="prof-img-2" className='about-image' />
                <div className="about-data">
                    <Info />
                    <p className="about-description">this is 90 line long Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Consequatur nisi qui repellendus, porro, optio reiciendis commodi non illo

                        Nobis hic eligendi debitis iusto a culpa. Culpa, repudiandae quas! Quod deleniti non quos.
                        Sapiente quis autem quod, vero, ipsa
                        praesentium vel quas ea nihil cupiditate molestias quae incidunt sit.</p>

                    <a download={'Tanmoy-Roy-Resume'} href={CV} id="resume-link-2" className="button button-flex">Resume<UilFileDownload /></a>
                </div>
            </div>

        </section>
    )
}

export default About