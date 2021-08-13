import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {uiActions} from "../../../store/UI-slice";
import classes from "./Work.module.css";
import Polygons from "../../UI/Polygons/Polygons";

const Work:React.FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiActions.closeSideMenu())
  })
  return (
      <div>
        <div className={classes.polygonContainer}>
          <Polygons/>
        </div>
      </div>
  )
}
export default Work;