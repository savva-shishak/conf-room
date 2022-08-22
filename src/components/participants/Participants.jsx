import "./Participants.scss";
import closeSvg from "./icons/close.svg"
import {Icon} from "../ui/icon/Icon";
import {store} from "../room";

import cameraSvg from "./icons/camera-enable.svg";
import cameraDisableSvg from "./icons/camera-disable.svg";
import audioSvg from "./icons/audio-enabled.svg";
import audioDisableSvg from "./icons/audio-disabled.svg";
import {animated, useSpring} from "react-spring";

export function Participants({ onClose, expand, onExpand }) {
    const [{ list = [] }] = store.useState("participants");
    const expandStyle = useSpring({
        width: expand? "65px" : "0px"
    });
    const closeStyle = useSpring({
        width: !expand? "56px" : "0px"
    });

    return <div className="participants">
        <div className="participants__header">
            <div className="participants__title">
                Участники
                <div className="participants__count">12</div>
            </div>
            {expand ?
                <animated.div
                    style={expandStyle}
                    className="participants__expand"
                    onClick={onExpand}
                >
                    Развернуть
                </animated.div>
                :
                <animated.div style={closeStyle}>
                    <Icon src={closeSvg} pointer textGrey6 iconSize={14} onClick={onClose}/>
                </animated.div>
            }
        </div>
        <div className="participants__list">
            {list
                .map(({peerID, name, audio, camera, avatarUrl}) =>
                    <div key={peerID} className="participants__item">
                        <img src={avatarUrl} alt="participants" className="participants__avatar"/>
                        {name}
                        <Icon
                            iconSize={20}
                            size={20}
                            src={audioSvg}
                            crossSrc={audioDisableSvg}
                            disable={audio}
                            textBlue={audio}
                            textGrey6={!audio}
                        />
                        <Icon
                            iconSize={20}
                            size={48}
                            src={cameraSvg}
                            crossSrc={cameraDisableSvg}
                            disable={camera}
                            textBlue={camera}
                            textGrey6={!camera}
                        />
                    </div>
                )
            }
        </div>
        <div className="participants__shadow-container">
            <div className="participants__shadow"></div>
        </div>
    </div>
}