import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/UI-slice";
import classes from "./Work.module.css";
import Polygons from "../../components/UI/Polygons/Polygons";
import Project from "../../components/Project/Project";
import {projects} from "../../Data/ProjectData";

const Work: React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(uiActions.closeSideMenu())
        },250)
    })
    return (
        <div className={classes.workContainer}>
            <div className={classes.polygonContainer}>
                <Polygons/>
            </div>
            <p className={classes.workText}>Work</p>
            <div className={classes.projectContainer}>
                {projects.map((project,index) => {
                    return <Project data={project} key={index}/>
                })}
            </div>
        </div>
    )
}
export default Work;
