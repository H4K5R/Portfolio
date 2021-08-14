import React from "react";
import {skillSectionType} from "../../Types";
import classes from './SkillSection.module.css'

const SkillSection:React.FC<{data:skillSectionType}> =  (props) => {
    return(
        <div className={classes.sectionContainer}>
            <p className={classes.sectionTitle}>{props.data.title}</p>
            <div className={classes.skillsContainer}>
                {props.data.skills.map((skill,index) => {
                    return <p className={classes.skill} key={index}>{skill}</p>
                })}
            </div>
        </div>
    )
}
export default SkillSection;