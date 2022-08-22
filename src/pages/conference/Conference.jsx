import React, {useState} from 'react';
import './Conference.scss';
import logo from "./icons/grey-logo.png";
import {Icon} from "../../components/ui/icon/Icon";
import {Windows} from "../../components/windows/Windows";
import homeSvg from "./icons/home.svg";
import cameraSvg from "./icons/camera-enable.svg";
import cameraDisableSvg from "./icons/camera-disable.svg";
import calendarSvg from "./icons/calendar_month.svg";
import settingsSvg from "./icons/settings.svg";
import {Participants} from "../../components/participants/Participants";
import {Chat} from "../../components/chat/Chat";
import {useSpring, animated} from "react-spring";

export function Conference() {
    const [toggle, setToggle] = useState(false);
    const [chat, setChat] = useState(true);
    const [participants, setParticipants] = useState(false);

    const style = useSpring({
        width: (chat || participants)? 580 : 0,
        padding: (chat || participants)? 20 : 0,
    });

    const chatStyle = useSpring({
        height: (chat && participants) ? '60%' : chat ? "100%" : "0%"
    });

    const participantsStyle = useSpring({
        height: (chat && participants) ? '40%' : participants ? "100%" : "0%"
    });

    return (
        <div className="conference">
            <div className="conference__menu">
                <img className="conference__logo" src={logo} alt="logo" />

                <div className="conference__links">
                    <Icon
                        pointer src={homeSvg}
                        textGrey6
                        iconSize={36}
                    />
                    <Icon
                        pointer
                        src={cameraSvg}
                        crossSrc={cameraDisableSvg}
                        disable={toggle}
                        onClick={() => setToggle(!toggle)}
                        blue
                        iconSize={36}
                    />
                    <Icon
                        pointer
                        src={calendarSvg}
                        textGrey6
                        iconSize={36}
                    />
                </div>

                <Icon pointer src={settingsSvg} textGrey6 />
            </div>
            <div className="conference__body">
                <Windows {...({ chat, setChat, participants, setParticipants })} />
            </div>
            <animated.div style={style} className="conference__right-column">
                <animated.div style={participantsStyle}>
                    <Participants
                        expand={participants && chat}
                        onClose={() => setParticipants(!participants)}
                        onExpand={() => setChat(false)}
                    />
                </animated.div>
                <animated.div style={chatStyle}>
                    <Chat
                        expand={participants && chat}
                        onClose={() => setChat(!chat)}
                        onExpand={() => setParticipants(false)}
                    />
                </animated.div>
            </animated.div>
        </div>
    );
}
