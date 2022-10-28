import React from "react";
import {skillSubSectionType} from "../../Types";
import classes from './SkillSection.module.css'

const SkillSubSection: React.FC<{ data: skillSubSectionType }> = (props) => {
    return (
        <div className={classes.sectionContainer}>
            <p className={classes.sectionTitle}>{props.data.title}</p>
            <div className={classes.skillsContainer}>
                {props.data.skills.map((skill, index) => {
                    return <p className={classes.skill} key={index}>{skill}</p>
                })}
            </div>
        </div>
    )
}
export default SkillSubSection;