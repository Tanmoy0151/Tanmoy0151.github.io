import React from 'react'

import { SiNodedotjs, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
const BackEnd = () => {
    return (<div className="skills-content">
        <h3 className="skills-title">Backend development Skills</h3>
        <div className="skills-box">
            <div className="skills-group">


                <div className="skills-data" >
                    <SiNodedotjs className='.skills-icon' />
                    <div>
                        <h3 className="skills-name">Node.js</h3>
                        <span className="skills-level">Js runtime Environment</span>
                    </div>
                </div>
                <div className="skills-data" >
                    <SiExpress className='.skills-icon' />
                    <div>
                        <h3 className="skills-name">Express.js</h3>
                        <span className="skills-level">NodeJs Framework</span>
                    </div>
                </div>
                <div className="skills-data" >
                    <SiMongodb className='.skills-icon' />
                    <div>
                        <h3 className="skills-name">MongoDB</h3>
                        <span className="skills-level">Databases and ORM</span>
                    </div>
                </div>
                <div className="skills-data" >
                    <SiMongoose className='.skills-icon' />
                    <div>
                        <h3 className="skills-name">Mongoose</h3>
                        <span className="skills-level">Databases and ORM</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BackEnd