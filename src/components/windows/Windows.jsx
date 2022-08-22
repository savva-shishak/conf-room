import "./Windows.scss";
import {Icon} from "../ui/icon/Icon";
import backSvg from "./icons/back.svg";
import groupSvg from "./icons/group.svg";
import gridSvg from "./icons/grid.svg";
import splits2Svg from "./icons/splitscreen.svg";
import splits3Svg from "./icons/3 splitcreen.svg";
import {Button} from "../ui/button/Button";
import React, {useState} from "react";
import {Grid} from "./Grid";
import {Split} from "./Split";
import {Carousel} from "./Carousel";
import {animated, useSpring} from "react-spring";

import RaisedHandSvg from "./icons/raised hand.svg";
import fullscreenEnterSvg from "./icons/enter.svg";
import outScreenSvg from "./icons/outscreen-enabled.svg";
import outScreenDisableSvg from "./icons/outscreen-disabled.svg";
import cameraSvg from "./icons/camera-enable.svg";
import cameraDisableSvg from "./icons/camera-disable.svg";
import chatSvg from "./icons/chat-enabled.svg";
import audioSvg from "./icons/audio-enabled.svg";
import audioDisableSvg from "./icons/audio-disabled.svg";

const MODES = [
    ['grid', gridSvg, Grid],
    ['split', splits2Svg, Split],
    ['carousel', splits3Svg, Carousel],
]

export function Windows({ chat, setChat, participants, setParticipants }) {
    const [screenMode, setScreenMode] = useState(2);
    const [clients] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const screensStyle = useSpring({
        gridTemplateColumns: `repeat(${MODES.length}, 100%)`,
        marginLeft:  (screenMode * -100) + "%",
        marginRight:  (screenMode * 100) + "%"
    });

    const [outScreen, setOutScreen] = useState(false);
    const [camera, setCamera] = useState(false);
    const [audio, setAudio] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    return <div className="windows">
        <div className="windows__head">
            <div className="windows__head-left">
                <Icon pointer src={backSvg} white textGrey6 size={36} className="windows__back" />
                Митинг-брифинг А-БТ
                <div className="windows__users-count">
                    <Icon src={groupSvg} size={36} iconSize={22} textGrey6 />
                    12
                </div>
                <Button lightgreen>+ Добавить</Button>
            </div>
            <div className="windows__head-right">
                {MODES.map((mode, index) => (
                    <Icon
                        key={index}
                        pointer
                        size={34}
                        src={mode[1]}
                        textlightTurquoise={index === screenMode}
                        textGrey6={index !== screenMode}
                        onClick={() => setScreenMode(index)}
                    />
                ))}
            </div>
        </div>
        <div className="windows__body" >
            <animated.div style={screensStyle} className="windows__screens">
                {MODES.map(([name,, Component]) => <Component key={name} clients={clients} />)}
            </animated.div>
        </div>
        <div className="windows__controls">
            <Icon
                size={48}
                iconSize={20} src={RaisedHandSvg} lightgreen pointer />
            <Icon
                size={48}
                iconSize={20}
                src={outScreenSvg}
                crossSrc={outScreenDisableSvg}
                disable={!outScreen}
                textRed={outScreen}
                white pointer
                onClick={() => setOutScreen(!outScreen)}
            />
            <Icon
                size={48}
                iconSize={20}
                src={cameraSvg}
                crossSrc={cameraDisableSvg}
                disable={!camera}
                textRed={camera}
                white pointer
                onClick={() => setCamera(!camera)}
            />
            <Icon
                size={48}
                iconSize={20}
                src={audioSvg}
                crossSrc={audioDisableSvg}
                disable={!audio}
                textRed={audio}
                white pointer
                onClick={() => setAudio(!audio)}
            />
            <Button red>Завершить</Button>
            <Icon
                size={48}
                iconSize={20}
                src={chatSvg}
                lightgreen={chat}
                textGrey6={!chat}
                white={!chat}
                pointer
                onClick={() => setChat(!chat)}
            />
            <Icon
                size={48}
                iconSize={20}
                src={groupSvg}
                lightgreen={participants}
                textGrey6={!participants}
                white={!participants}
                onClick={() => setParticipants(!participants)}
                pointer
            />
            <Icon
                size={48}
                iconSize={20}
                src={fullscreenEnterSvg}
                white pointer
                onClick={() => setFullscreen(!fullscreen)}
            />
        </div>
    </div>
}