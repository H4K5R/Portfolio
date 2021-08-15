import React from "react";
import {Link, NavLink} from "react-router-dom";
import classes from "./TopMenu.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {uiActions} from "../../../store/UI-slice";
import {contactLink, skillsLink, workLink } from "../../../LinkPaths";
import cv from "../../../Documents/dev00-cv.pdf"


const TopMenu: React.FC<{}> = function () {
    const dispatch = useDispatch();
    const isSideMenuOpen = useSelector((state: RootState) => state.uiReducer.isSideMenuOpen)
    const onMenuClick = () => {
        if (isSideMenuOpen) {
            dispatch(uiActions.closeSideMenu());
        } else {
            dispatch(uiActions.openSideMenu());
        }
    }
    return (
        <>
            <nav className={classes.navBar}>
                <div className={classes.burgerContainer} onClick={onMenuClick}>
                    <div className={classes.burgerLine}/>
                    <div className={classes.burgerLine}/>
                    <div className={classes.burgerLine}/>
                </div>
                <Link to={'/'} className={classes.brand}>Dev00</Link>
                <ul className={`${classes.menu} ${classes.desktopMenu}`}>
                    <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem}
                                 to={workLink}>Work</NavLink></li>
                    <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem}
                                 to={skillsLink}>Skills</NavLink></li>
                    <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem}
                                 to={contactLink} >Contact</NavLink></li>
                </ul>
                <a className={classes.aClass} href={cv} target={'_blank'} rel={'noreferrer'}><button className={classes.cv}>Download CV</button></a>
            </nav>
        </>
    )
}
export default TopMenu;