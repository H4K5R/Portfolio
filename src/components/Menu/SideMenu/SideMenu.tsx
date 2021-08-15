import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./SideMenu.module.css";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../../store/UI-slice";
import {RootState} from "../../../store";
import {contactLink, skillsLink, workLink } from "../../../LinkPaths";
import cv from "../../../Documents/dev00-cv.pdf";

const SideMenu: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const isSideMenuOpen = useSelector((state:RootState) => state.uiReducer.isSideMenuOpen)
    const onModalClick = () => {
        dispatch(uiActions.closeSideMenu());
    }
    return (
        <div className={`${classes.overAllContainer} ${isSideMenuOpen? classes.open:''}`}>
            <div className={`${classes.modal} ${isSideMenuOpen? classes.open:''}`} onClick={onModalClick}/>
            <div className={classes.sideMenuContainer}>
                <p className={classes.menuText}>Menu</p>
                <ul className={classes.menu}>
                    <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem}
                                 to={workLink}>Work</NavLink></li>
                    <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem}
                                 to={skillsLink}>Skills</NavLink></li>
                    <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem}
                                 to={contactLink}>Contact</NavLink></li>
                </ul>
                <a href={cv} target={'_blank'} rel={'noreferrer'}><button className={classes.cv}>Download CV</button></a>
            </div>

        </div>

    );
}
export default SideMenu;
