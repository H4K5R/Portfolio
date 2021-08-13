import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {uiActions} from "../../../store/UI-slice";


const Skills: React.FC<{}> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(uiActions.closeSideMenu())
    })

    return (
        <div>

        </div>
    );
}
export default Skills;