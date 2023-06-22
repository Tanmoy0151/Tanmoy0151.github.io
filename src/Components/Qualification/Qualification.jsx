import React, { useState } from 'react'
import './Qualification.css'
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My Journey</span>
            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={toggleState === 1 ? "qualification-button button-flex qualification-active"
                        : "qualification-button button-flex"}
                        onClick={() => toggleTab(1)}>

                        <>ic</> {" "}
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualification-button button-flex qualification-active"
                        : "qualification-button button-flex"}
                        onClick={() => toggleTab(2)}>
                        <>ic</> {" "}
                        Expreience
                    </div>
                </div>


                {/* ============= Qualification section ========================= */}

                <div className="qualification-section">
                    <div className={toggleState === 1 ? "qualification-content qualification-content-active " : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">B.Tech</h3>
                                <span className="qualification-subtitle">GCELT</span>
                                <div className="qualification-calender">
                                    <>ic</>
                                    2021-Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div className="blankSpace"></div>
                        </div>
                        <div className="qualification-data">
                            <div className="blankSpace"></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">B.Tech</h3>
                                <span className="qualification-subtitle">GCELT</span>
                                <div className="qualification-calender">
                                    <>ic</>
                                    2021-Present
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className={toggleState === 2 ? "qualification-content qualification-content-active " : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">EXP1</h3>
                                <span className="qualification-subtitle">GCELT</span>
                                <div className="qualification-calender">
                                    <>ic</>
                                    2021-Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div className="blankSpace"></div>
                        </div>
                        {/* ---------------- */}
                        <div className="qualification-data">
                            <div className="blankSpace"></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div >

                                <h3 className="qualification-title">EXP@</h3>
                                <span className="qualification-subtitle">Contai</span>
                                <div className="qualification-calender">
                                    <>ic</>
                                    2021-Present
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}

export default Qualification