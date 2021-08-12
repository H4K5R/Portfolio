import React from 'react';
import classes from  './App.module.css';
import TopMenu from "./components/Menu/TopMenu/TopMenu";
import SideMenu from "./components/Menu/SideMenu/SideMenu";

function App() {
    return (
        <div className={classes.App}>
            <TopMenu/>
            <SideMenu/>
            <div className={classes.mainContent}>

            </div>
        </div>
    );
}

export default App;
