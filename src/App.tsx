import React from 'react';
import classes from  './App.module.css';
import TopMenu from "./components/Menu/TopMenu/TopMenu";
import SideMenu from "./components/Menu/SideMenu/SideMenu";
import Home from "./components/Pages/Home/Home";
import {Route, Switch} from "react-router";
import {contactLink, homeLink, skillsLink, workLink} from './LinkPaths';
import Work from "./components/Pages/Work/Work";
import Skills from "./components/Pages/Skills/Skills";
import Contact from "./components/Pages/Contact/Contact";

function App() {
    return (
        <div className={classes.App}>
            <TopMenu/>
            <SideMenu/>
            <div className={classes.mainContent}>
                <Switch>
                    <Route path={homeLink} exact={true}><Home/></Route>
                    <Route path={workLink}><Work/></Route>
                    <Route path={skillsLink}><Skills/></Route>
                    <Route path={contactLink}><Contact/></Route>
                </Switch>

            </div>
        </div>
    );
}

export default App;
