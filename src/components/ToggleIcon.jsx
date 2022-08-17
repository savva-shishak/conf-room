import "./ToggleIcon.scss";
import {useSpring, animated} from "react-spring";

export function ToggleIcon({ children, checked, onClick }) {
    const colorStyles = useSpring({
        color: checked? 'green' : 'black'
    });
    const widthStyles = useSpring({
        width: !checked? 30 : 0
    });

    return <animated.div className="toggle-icon" style={colorStyles} onClick={onClick} >
        <animated.div className="toggle-icon__off-marker" style={widthStyles} />
        {children}
    </animated.div>
}