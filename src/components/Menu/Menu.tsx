import React from "react";
import {Link, NavLink} from "react-router-dom";
import classes from "./Menu.module.css"

const Menu:React.FC<{}> = function () {
    return(
        <div className={classes.navBar}>
            <Link to={'/'} className={classes.brand}>Dev00</Link>
            <ul className={classes.menu}>
                <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem} to={'/work'}>Work</NavLink></li>
                <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem} to={'/skills'}>Skills</NavLink></li>
                <li><NavLink className={classes.menuItem} activeClassName={classes.activeItem} to={'/contact'}>Contact</NavLink></li>
            </ul>
            <button className={classes.cv}>Download CV</button>
        </div>
    )
}
export default Menu;