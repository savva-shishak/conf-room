import "./Sigin.scss";
import {useSpring, animated} from "react-spring";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import whiteLogo from "../images/white_logo.svg";
import logo from "../images/big_logo.svg";
import bg from "../images/backgroud.jpg";

export function Signin() {
    const [roomId, setRoomId] = useState("");
    const [placeholder, setPlaceholder] = useState("Введите название комнаты");
    const navigate = useNavigate();

    const [logoHide, setLogoHide] = useState(true);
    const [rotatedLogo, setRotatedLogo] = useState(true);
    const logoStyles = useSpring({
        width: logoHide? 0 : 120,
        height: logoHide? 0 : 120,
        transform: `rotate(${rotatedLogo ? "0" : "360"}deg)`,
        margingBottom: 15,
    });
    const logoTextStyles = useSpring({
        opacity: rotatedLogo? 0 : 1,
        marginTop: rotatedLogo? 0 : 10,
        marginBottom: rotatedLogo? 0 : 25,
        fontSize: rotatedLogo? 0 : 20
    });

    const [inputHide, setInputHide] = useState(true);
    const inputStyles = useSpring({
        width: inputHide? 0 : window.innerWidth > 1000 ? 800 : window.innerWidth > 600 ? 500 : 300,
        paddingLeft: inputHide? 0 : 20,
        paddingRight: inputHide? 0 : 20,
        paddingTop: inputHide? 0 : 15,
        paddingBottom: inputHide? 0 : 15,
    });

    const signinTextStyles = useSpring({
        opacity: roomId? 1 : 0,
        transform: `scale(${roomId? 1 : 0.5})`
    });

    useEffect(() => {
        setTimeout(() => setLogoHide(false), 500);
        setTimeout(() => {
            setRotatedLogo(false);
            setInputHide(false);
        }, 1000);
    }, []);

    return <div className="sigin">
        <img src={bg} alt={"background"} className="bg"/>
        <img src={whiteLogo} alt={"background"} className="sigin__logo"/>
        <form className="sigin__form" onSubmit={(e) => {
            e.preventDefault();
            if (roomId) {
                navigate("/preparation/" + roomId);
            } else {
                setPlaceholder("Название комнаты обязательно!!!")
            }
        }}>
            <animated.img style={logoStyles} src={logo} />
            <animated.div className="sigin__logo-text" style={logoTextStyles}>Видеоконференции</animated.div>
            <animated.input
                value={roomId}
                onChange={e => setRoomId(e.target.value)}
                style={inputStyles}
                placeholder={placeholder}
                className="sigin__input"
            />
            <animated.button style={signinTextStyles} type="submit" className="btn">
                Присоединиться
            </animated.button>
        </form>
    </div>
}