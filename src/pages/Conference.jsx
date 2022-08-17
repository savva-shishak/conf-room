import React, {useState} from 'react';
import './Conference.scss';
import {store, Window} from "../components/room/";
import {useRoom} from "../components/room/useRoom";
import {animated, useSpring} from "react-spring";
import {ToggleIcon} from "../components/ToggleIcon";
import {BsCheckLg, BsFillCameraVideoFill, BsFillMicFill} from "react-icons/bs";
import {AiOutlinePoweroff,} from "react-icons/ai";
import {MdOutlineScreenShare} from "react-icons/md";
import {BiFullscreen} from "react-icons/bi";

const tabs = ["Участники", "Чаты"];

export function Conference() {
    const { id } = useRoom();
    const [{ name, id: currentClientId }] = store.useState("user");
    const [open, setOpen] = useState("");
    const style = useSpring({
        width: open === "" ? 0 : window.innerWidth > 700 ? 300 : 'auto'
    });

    const [mic, setMic] = useState(true);
    const [camera, setCamera] = useState(true);
    const [outScreen, setOutScreen] = useState(true);
    const [username, setUsername] = useState(name);

    const changeUsernameBtn = useSpring({
        cursor: 'pointer',
        marginLeft: 15,
        transform: `scale(${name === username? 0 : 1})`,
        color: 'green'
    });

    return (
        <div className="conference">
            {(!open || window.innerWidth > 700) ? <div className="conference__main-window">
                <div className="card">
                    <div className="conference__header">
                        <div className="conference__title">
                            Room {id}
                            <div className="conference__username">
                                Ваше имя:
                                <input id="username" value={username} onChange={e => setUsername(e.target.value)} />
                                <animated.span
                                    style={changeUsernameBtn}
                                    onClick={() => {
                                        store.setState(
                                            "user",
                                            {
                                                ...store.getState("user"),
                                                name: username
                                            })
                                    }}
                                >
                                    <BsCheckLg />
                                </animated.span>
                            </div>
                        </div>
                        <div className="conference__tools">
                            <ToggleIcon
                                checked={mic}
                                onClick={() => setMic(!mic)}
                            ><BsFillMicFill /></ToggleIcon>
                            <ToggleIcon
                                checked={camera}
                                onClick={() => setCamera(!camera)}
                            ><BsFillCameraVideoFill /></ToggleIcon>
                            <ToggleIcon
                                checked={outScreen}
                                onClick={() => setOutScreen(!outScreen)}
                            ><MdOutlineScreenShare /></ToggleIcon>
                            <ToggleIcon checked><BiFullscreen /></ToggleIcon>
                            <ToggleIcon checked><AiOutlinePoweroff /></ToggleIcon>
                        </div>
                    </div>
                    <Window clientid={currentClientId}/>
                </div>
            </div> : null}
            {(open || window.innerWidth > 700) ? <animated.div style={style} className="conference__column">
                {open === "Участники" && <div className="conference__other-windows card">
                    <Window clientid={1}/>
                    <Window clientid={2}/>
                    <Window clientid={3}/>
                    <Window clientid={4}/>
                    <Window clientid={5}/>
                    <Window clientid={6}/>
                    <Window clientid={7}/>
                    <Window clientid={8}/>
                    <Window clientid={9}/>
                    <Window clientid={10}/>
                    <Window clientid={11}/>
                </div>}
                {open === "Чаты" && <div className="conference__chat card">
                    Чаты
                </div>}
            </animated.div>: null}
            <div className="tabs tabs_right">
                {tabs.map((styles, id) =>
                    <div
                        className={"tabs__item" + (open === tabs[id] ? " tabs__item_active" : "")}
                        onClick={() => setOpen(open === tabs[id] ? "" : tabs[id])}
                    >
                        {tabs[id]}
                    </div>)}
            </div>
        </div>
    );
}
