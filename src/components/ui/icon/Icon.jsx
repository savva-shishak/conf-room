import {useSpring, animated} from "react-spring";
import colors from "../colors";
import "./Icon.scss";

export function Icon({
     children,
     onClick,
     className = "",
     rotate = 0,
     scale = 1,
     x = 0,
     y = 0,
    size = 56,
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
    });

    const bg = useSpring({
        backgroundColor: bgColor,
        width: bgColor !== "transparent"? size : 0,
        height: bgColor !== "transparent"? size : 0,
    });

    const icon = useSpring({
        width: size/2 >> 0,
        height: size/2 >> 0,
        color: textColor,
    });

    const crossStyle = useSpring({
        width: mods.includes("cross")? Math.sqrt(size*size*2) : 0,
        backgroundColor: textColor
    })

    return <animated.div style={container} onClick={onClick} className={"icon-container " + className}>
        <animated.div className="icon-bg" style={bg} />
        <animated.div className="icon-cross" style={crossStyle} />
        <animated.span style={icon} className="icon">
            {children}
        </animated.span>
    </animated.div>
}