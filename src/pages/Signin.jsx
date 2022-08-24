import "./Sigin.scss";
import {useSpring, animated} from "react-spring";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { Icon } from "../components/ui/icon/Icon";
import logo from "./logo.svg";
import nextArrowSvg from "./nextArrow.svg";
import { Background } from "../components/ui/background/Background";

export function Signin() {
    const [roomId, setRoomId] = useState("");
    const [placeholder, setPlaceholder] = useState("Введите название комнаты");
    const navigate = useNavigate();

    const [logoHide, setLogoHide] = useState(true);
    const [rotatedLogo, setRotatedLogo] = useState(true);
    const [hideName, setHideName] = useState(true)

    const logoStyles = useSpring({
        width: logoHide? 0 : 79,
        height: logoHide? 0 : 79,
        transform: `rotate(${!hideName ? "-720" : rotatedLogo ? "0" : "-360"}deg)`,
        margingBottom: 15,
    });

    const logoName = useSpring({ width: hideName? 0 : 120 });

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
        paddingRight: inputHide? 0 : 8,
        paddingTop: inputHide? 0 : 8,
        paddingBottom: inputHide? 0 : 8,
    });

    useEffect(() => {
        setTimeout(() => setLogoHide(false), 700);
        setTimeout(() => {
            setRotatedLogo(false);
            setInputHide(false);
        }, 1500);
        setTimeout(() => setHideName(false), 2200);
    }, []);

    function submit() {
        if (roomId) {
            navigate("/preparation/" + roomId);
        } else {
            setPlaceholder("Название комнаты обязательно!!!")
        }
    }

    return <div className="sigin">
        <Background animationDelay={2500} />
        <form className="sigin__form" onSubmit={(e) => {
            e.preventDefault();
            submit();
        }}>
            <div className="sigin__logo">
                <animated.img style={logoStyles} src={logo} />
                <animated.div style={logoName} className="sigin__logo-name">
                    <div className="sigin__logo-bigname">АЛЬФА</div>
                    <div className="sigin__logo-smallname">
                        бизнес технологии
                    </div>
                </animated.div>
            </div>
            <animated.div className="sigin__logo-text" style={logoTextStyles}>Видеоконференции</animated.div>
            <animated.div style={inputStyles} className="sigin__input">
                <input
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                    placeholder={placeholder}
                />
                <Icon src={nextArrowSvg} size={!!roomId? 40 : 0} maingradient pointer onClick={submit} />
            </animated.div>
        </form>
    </div>
}