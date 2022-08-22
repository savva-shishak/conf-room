import "./Button.scss";
import {animated, useSpring} from "react-spring"
import colors from "../colors";

export function Button({className, style, onClick, children, ...props}) {
    const mods = Object.keys(props).filter(key => !!props[key]);

    const backgroundColor = colors.value(mods);

    const localStyle = useSpring({
        ...style,
        color: colors.text(mods),
        backgroundColor,
    });

    return <animated.button
        style={localStyle}
        className={"button " + className}
        onClick={(e) => {
            onClick(e);
        }}
        {...props}
    >
        {children}
        <div className="button__highlight"></div>
    </animated.button>
}
