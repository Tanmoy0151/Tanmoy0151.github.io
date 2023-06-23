import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css'
import { UilArrowRight, UilEnvelope, UilPhoneAlt, UilLinkedinAlt } from '@iconscout/react-unicons'
const Contacts = () => {
    const form = useRef();
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const PUBLIC_KEY = process.env.PUBLIC_KEY;
console.log(SERVICE_ID,TEMPLATE_ID,PUBLIC_KEY);

  const sendEmail = (e) => {
    e.preventDefault();
  

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
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
                        {/* mail */}
                        <div className="contact-card"><UilEnvelope className='contact-card-icon' />
                            <h3 className="contact-card-title">Mail</h3>
                            <span className="contact-card-data">roytanmoy662@gmail.com</span>
                            <a href="mailto:roytanmoy662@gmail.com" className="contact-button">Write me {" "}<UilArrowRight className='contact-button-icon' /></a>
                        </div>
                        {/* phone */}
                        <div className="contact-card"><UilPhoneAlt className='contact-card-icon' />
                            <h3 className="contact-card-title">Mobile</h3>
                            <span className="contact-card-data">+91 9093141114</span>
                            <a href="tel:+91 9093141114" className="contact-button">Call me {" "}<UilArrowRight className='contact-button-icon' /></a>
                        </div>
                        {/* Linkedin */}
                        <div className="contact-card"><UilLinkedinAlt className='contact-card-icon' />
                            <h3 className="contact-card-title">Linkedin</h3>
                            <span className="contact-card-data">tanmoy-roy-28b081253</span>
                            <a href="https://www.linkedin.com/in/tanmoy-roy-28b081253/" className="contact-button">See me {" "}<UilArrowRight className='contact-button-icon' /></a>

                        </div>




                    </div>

                </div>
                <div className="contact-content">
                    <h3 className="contact-title">Write me on Your Project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="contact-from-div">
                            <label htmlFor="" className="contact-from-tag">Name</label>
                            <input type="text" name="name" className="contact-from-input" placeholder='Insert Your Name' />

                        </div>
                        <div className="contact-from-div">
                            <label htmlFor="" className="contact-from-tag">Email</label>
                            <input type="email" name="email" className="contact-from-input" placeholder='Insert Your Email' />

                        </div>
                        <div className="contact-from-div contact-from-area">
                            <label htmlFor="" className="contact-from-tag">Project</label>
                            <textarea type="text" name="project" cols='30' rows='10' className="contact-from-input" placeholder='Write your Projects' />

                        </div>
                        <button className="button button--flex">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contacts