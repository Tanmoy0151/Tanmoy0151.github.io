import React from 'react'

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiChakraui, SiTailwindcss } from "react-icons/si";
const FrontEnd = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Frontend development Skills</h3>
            <div className="skills-box">
                <div className="skills-group">




                    <div className="skills-data" >
                        <SiHtml5 className='.skills-icon' />
                        <div>
                            <h3 className="skills-name">HTML-5</h3>
                            <span className="skills-level">Document</span>
                        </div>
                    </div>

                    <div className="skills-data" >
                        <SiCss3 className='.skills-icon' />
                        <div>
                            <h3 className="skills-name">CSS-3</h3>
                            <span className="skills-level">Stylesheet</span>
                        </div>
                    </div>
                    <div className="skills-data" >
                        <SiJavascript className='.skills-icon' />
                        <div>
                            <h3 className="skills-name">JavaScript</h3>
                            <span className="skills-level">Programming Languages</span>
                        </div>
                    </div>
                    <div className="skills-data" >
                        <SiReact className='.skills-icon' />
                        <div>
                            <h3 className="skills-name">React.js</h3>
                            <span className="skills-level">JavaScript Library</span>
                        </div>
                    </div>
                    <div className="skills-data" >
                        <SiChakraui className='.skills-icon' />
                        <div>
                            <h3 className="skills-name">ChakraUI</h3>
                            <span className="skills-level">UI/UX Frameworks</span>
                        </div>
                    </div>
                    <div className="skills-data" >
                        <SiTailwindcss className='.skills-icon' />
                        <div>
                            <h3 className="skills-name">Tailwind</h3>
                            <span className="skills-level">UI/UX Frameworks</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FrontEnd