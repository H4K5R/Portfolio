import React, {useCallback, useEffect, useState} from "react";
import classes from './Polygon.module.css'

const Polygon:React.FC<{src:string}> = (props) => {

    const [x,setX] = useState<number>(1);
    const [y,setY] = useState<number>(2);
    const [rotation,setRotation] = useState<number>(120);

    const randomMovement = useCallback(() => {
        const html = document.documentElement;
        const height = html.clientHeight;
        const width = html.clientWidth;
        const polyHeight = width/10;
        const polyHypotenuse = Math.sqrt(((polyHeight * polyHeight) + (polyHeight * polyHeight)));
        let x = Math.ceil(width * Math.random());
        let y  = Math.ceil(height * Math.random());
        let rotation = Math.ceil(Math.random() * 360);
        if (y > height - polyHypotenuse) {
            y = height - polyHypotenuse;
        }
        if (x > width - polyHypotenuse) {
            x = width - polyHypotenuse;
        }
        setX(x);
        setY(y);
        setRotation(rotation);
    },[])
    useEffect(() => {
        randomMovement();
        const x = setInterval(() => {
            randomMovement();
        },5000)
        return () => {
            clearInterval(x)
        };
    },[randomMovement])

    return (
        <img src={props.src} alt={'polygon'} className={classes.polygon} style={{
            transform:`translate(${x}px,${y}px) rotate(${rotation}deg)`,
        }}/>
    )
}
export default Polygon;