import {useSpring, animated} from "react-spring";
import colors from "../colors";
import "./Icon.scss";
import {ReactSVG} from "react-svg";
import React from "react";

export function Icon({
     src,
     crossSrc,
     onClick,
     className = "",
     rotate = 0,
     scale = 1,
     x = 0,
     y = 0,
    size = 56,
    iconSize = size/2 >> 0,
     ...props
}) {
    const mods = Object.keys(props).filter(key => !!props[key]);

    const bgColor = colors.value(mods);
    const textColor = colors.text(mods);

    const container = useSpring({
        width: size,
        height: size,
        transform: `rotate(${rotate}deg) scale(${scale}) translateX(${x}px) translateY(${y}px)`,
        cursor: mods.includes("pointer")? "pointer" : "default",
        borderRadius: mods.includes("noround")? "0%" : "50%"
    });

    const bg = useSpring({
        backgroundColor: bgColor,
        width: bgColor !== "transparent"? size : 0,
        height: bgColor !== "transparent"? size : 0,
    });

    const icon = useSpring({
        width: iconSize,
        height: iconSize,
        fill: textColor,
    });

    const crossContainerStyle = useSpring({
        width: mods.includes("disable")? 0 : iconSize,
        height: mods.includes("disable")? 0 : iconSize,
        overflow: 'hidden',
        backgroundColor: bgColor !== "transparent" ? bgColor : "white",
    })

    const crossStyle = useSpring({
        width: iconSize,
        height: iconSize,
        fill: textColor,
    })

    return <animated.div style={container} onClick={onClick} className={"icon-container " + className}>
        <animated.div className="icon-bg" style={bg} />
        <animated.span style={icon} className="icon">
            <ReactSVG src={src}/>
            {crossSrc && <animated.span style={crossContainerStyle} className="icon-cross">
                <animated.div style={crossStyle}>
                    <ReactSVG src={crossSrc}/>
                </animated.div>
            </animated.span>}
        </animated.span>
    </animated.div>
}