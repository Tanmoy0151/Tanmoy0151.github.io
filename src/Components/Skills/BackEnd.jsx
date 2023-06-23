import React from 'react'
import skillsData from './skills.json'
const BackEnd = () => {
    return (<div className="skills-content">
        <h3 className="skills-title">Backend development Skills</h3>
        <div className="skills-box">
            <div className="skills-group">

                {skillsData.back_end.map(skill => <div className="skills-data" key={skill.id}>
                    <>ic</>
                    <div>
                        <h3 className="skills-name">{skill.skill_name}</h3>
                        <span className="skills-level">{skill.skillType}</span>
                    </div>
                </div>)}

            </div>
        </div>
    </div>
    )
}

export default BackEnd