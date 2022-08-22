import "./Chat.scss";
import {Icon} from "../ui/icon/Icon";
import closeSvg from "../participants/icons/close.svg";
import sendSvg from "./icons/send.svg";
import attachSvg from "./icons/attach-file.svg";
import {useSpring, animated} from "react-spring";
import {useChat} from "./useChat";
import {Message} from "./Message";
import {useRef} from "react";

export function Chat({ onClose, expand, onExpand }) {
    const { messages = [], getMessage, preview, setPreview, showPreview } = useChat();
    const expandStyle = useSpring({
        width: expand? "65px" : "0px"
    });
    const closeStyle = useSpring({
        width: !expand? "56px" : "0px"
    });

    const ref = useRef(null);

    return <div className="chat">
        <div className="chat__header">
            <div className="chat__title">
                Чат
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
        <div className="chat__body">
            <div className="chat__messages" ref={ref}>
                {messages.map(message => <Message message={getMessage(message.id)} key={message.id} />)}

            </div>
            <div className="chat__input">
                <Icon src={attachSvg} size={40} iconSize={20} white textGrey6 pointer />
                <textarea type="text" rows="auto" placeholder="Сообщение..." className="chat__text-field" />
                <Icon src={sendSvg} size={40} iconSize={20} white textBlue pointer />
            </div>
        </div>
    </div>
}