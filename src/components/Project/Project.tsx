import React from "react";
import classes from "./Project.module.css";
import {projectDataType} from "../../Types";


const Project: React.FC<{
    data:projectDataType
}> = (props) => {
    return (
        <div className={classes.projectContainer}>
            <img className={classes.image} src={props.data.image} alt={'project-cover'}/>
            <p className={classes.text}>{props.data.name}</p>
            <p className={classes.text}>{props.data.description}</p>
            <div className={classes.techContainer}>
                {props.data.technology.map((tech,index) => {
                    return <p className={classes.techText} key={index}>{tech}</p>
                })}
            </div>
            {
                props.data.link? <a className={classes.button} href={props.data.link} target="_blank" rel={'noreferrer'}>{props.data.buttonText}</a> : ''
            }

        </div>
    )
}
export default Project;