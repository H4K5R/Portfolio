import polygon1 from '../../../Images/Polygon 1.svg';
import polygon2 from '../../../Images/Polygon 2.svg';
import polygon3 from '../../../Images/Polygon 3.svg';
import polygon4 from '../../../Images/Polygon 4.svg';
import polygon5 from '../../../Images/Polygon 5.svg';
import polygon6 from '../../../Images/Polygon 6.svg';
import polygon7 from '../../../Images/Polygon 7.svg';
import polygon8 from '../../../Images/Polygon 9.svg';
import polygon9 from '../../../Images/Polygon 10.svg';
import polygon10 from '../../../Images/Polygon 11.svg';
import React from "react";
import Polygon from "../Polygon/Polygon";
const Polygons:React.FC<{}> = () => {
    const polygonsImports = [polygon1,polygon2,polygon3,polygon4,polygon5,
        polygon6,polygon7,polygon8,polygon9,polygon10]
    return(
        <>
            {polygonsImports.map((polygon, index) => {
                return <Polygon src={polygon} key={index}/>
            })}
        </>
    );
}
export default Polygons;