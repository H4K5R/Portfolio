import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {uiActions} from "../../../store/UI-slice";
import classes from './Skills.module.css';
import Background from "../../../Images/Background.png";
import {skills} from "./SkillsData";
import SkillSection from "../../SkillSection/SkillSection";


const Skills: React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(uiActions.closeSideMenu())
        },250)
    })
    return (
        <div className={classes.skillsContainer}>
            <p className={classes.skillsText}>Skills</p>
            <div className={classes.background} style={{
                background: ` url(${Background}) `,
                backgroundSize:'cover'
            }}>
            </div>
            <div className={classes.skillsSubContainer}>
                {skills.map((section,index) => {
                    return <SkillSection data={section} key={index}/>
                })}
            </div>
        </div>
    );
}
export default Skills;