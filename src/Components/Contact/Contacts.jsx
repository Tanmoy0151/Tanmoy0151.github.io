import React from 'react'
import './Contacts.css'
const Contacts = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">
                Get In Touch
            </h2>
            <span className="section-subtitle">Contact Me</span>

            <div className="contact-container container grid">
                <div className="contact-content">
                    <h3 className="contact-title">Talk to Me</h3>
                    <div className="contact-info">
                        <div className="contact-card"><>icon</>
                            <h3 className="contact-card-title"></h3></div>
                        <span className="contact-card-data"></span>
                        <a href="" className="contact-button"></a>            </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts