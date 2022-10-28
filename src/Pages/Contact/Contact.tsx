import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {uiActions} from "../../store/UI-slice";
import classes from "./Contact.module.css";
import mail from "../../Images/Mail.svg";
import linkedIn from "../../Images/LinkedIn.svg";
import github from "../../Images/Github.svg";
import insta from "../../Images/Insta.svg";
import waves from "../../Images/Waves.png";

const Contact: React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(uiActions.closeSideMenu())
        }, 250)
    })
    return (
            <div className={classes.contactContainer}>
                <p className={classes.contactText}>Contact</p>
                <div>
                    <p className={classes.contentHeading}>About</p>
                    <p className={classes.content}>
                        I’m Hariharan Kurathallvar Sriram (call me Kash if its hard for you to pronounce) I’m a
                        Fullstack
                        developer and Can build apps for Mobile, Desktop and Web.
                        <br/><br/>
                        I can Design UI, make Protypes and I have experience in Video production and image manipulation.
                        I’m a team player, can acquire new skills on requirement and dependable on times of need.
                    </p>
                </div>
                <div>
                    <p className={classes.contentHeading}>Reach me at these places</p>
                    <div className={classes.linksContainer}>
                        <a className={classes.link} href="mailto:hariharansriram17@gmail.com" target="_blank"
                           rel={'noreferrer'}><img className={classes.linkImage} src={mail} alt={'mail'}/></a>
                        <a className={classes.link} href={'https://www.linkedin.com/in/hariharan-kurathallvar-sriram/'}
                           target="_blank" rel={'noreferrer'}><img className={classes.linkImage} src={linkedIn}
                                                                   alt={'linkedIn'}/></a>
                        <a className={classes.link} href={'https://github.com/h4k5r'} target="_blank"
                           rel={'noreferrer'}><img className={classes.linkImage} src={github} alt={'github'}/></a>
                        <a className={classes.link} href={'https://www.instagram.com/h4k5r/'} target="_blank"
                           rel={'noreferrer'}><img className={classes.linkImage} src={insta} alt={'instagram'}/></a>
                    </div>
                </div>
                <div className={classes.wavesContainer}>
                    <p className={classes.copyRightText}>Copyright © Hariharan Kurathallvar Sriram</p>
                    <img className={classes.waves} src={waves} alt={'waves'}/>
                </div>
            </div>
    )
}
export default Contact;