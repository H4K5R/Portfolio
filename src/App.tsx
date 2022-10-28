import React from 'react';
import classes from  './App.module.css';
import TopMenu from "./components/Menu/TopMenu/TopMenu";
import SideMenu from "./components/Menu/SideMenu/SideMenu";
import {Route, Switch} from "react-router";
import {contactLink, homeLink, skillsLink, workLink} from './LinkPaths';
import Home from "./Pages/Home/Home";
const Work = React.lazy(() => import("./Pages/Work/Work"));
const Skills = React.lazy(() => import( "./Pages/Skills/Skills"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));

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
