import React from "react";
import {Link} from "react-router-dom";
import {contactLink} from "../../../LinkPaths";
import classes from "./Home.module.css";
import Background from '../../../Images/Background.png';
import Gear1 from '../../../Images/Gear 1.svg';
import Gear2 from '../../../Images/Gear 2.svg';

const Home: React.FC<{}> = () => {
    return (
        <div className={classes.overAllContainer}>
            <p className={classes.hello}>Hello There,</p>
            <div className={classes.subContainer}>
                <p className={classes.name}>I'm Hariharan Sriram</p>
                <p className={classes.who}>I'm a Software Engineer</p>
            </div>
            <p className={classes.whatDo}>I build apps for web,mobile and computers</p>
            <Link to={contactLink} className={classes.contactButton}>Contact Now</Link>
            <div className={classes.background} style={{
                background: `linear-gradient(180deg, #000000 70%, rgba(0, 0, 0, 0) 100%), url(${Background}) `,
                backgroundSize:'cover'
            }}>
                <div className={classes.gearContainer}>
                    <img src={Gear1} alt={'gear'} className={`${classes.gear} ${classes.leftGear}`}/>
                    <img src={Gear2} alt={'gear'} className={`${classes.gear} ${classes.rightGear}`}/>
                </div>

            </div>
        </div>
    );
}
export default Home;