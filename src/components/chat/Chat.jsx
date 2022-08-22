import "./Chat.scss";
import {Icon} from "../ui/icon/Icon";
import closeSvg from "../participants/icons/close.svg";
import {useSpring, animated} from "react-spring";
import {useChat} from "./useChat";
import {Message} from "./Message";

export function Chat({ onClose, expand, onExpand }) {
    const { messages = [] } = useChat();
    const expandStyle = useSpring({
        width: expand? "65px" : "0px"
    });
    const closeStyle = useSpring({
        width: !expand? "56px" : "0px"
    });

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
            <div className="chat__messages">
                {messages.map(message =>
                    <Message id={message.id} key={message.id} />
                )}
            </div>
            <div className="chat__input"></div>
        </div>
    </div>
}