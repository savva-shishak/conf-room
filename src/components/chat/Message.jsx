import {useChat} from "./useChat";
import {DownloadFile} from "../downloadfile/DownloadFile";
import "./Message.scss";
import {store} from "../room";

const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

function injectAnchors(text = "") {
    const links = text.match(regex) || [];
    let result = text;

    for (const [id, link] of links.entries()) {
        result = result.replace(link, "<==mark" + id + "==>");
    }

    for (const [id, link] of links.entries()) {
        const anchor = `<a href="${link}" target="_blank" >${link}</a>`;

        result = result.replace("<==mark" + id + "==>", anchor);
    }

    return result;
}

export function Message({ message }) {

    const [{ peedID }] = store.useState("user");

    const own = message.authorPeedID === peedID;

    const body = <div className={"message__body" + (own? " message__body_own" : "")}>
        <div className="message__text" dangerouslySetInnerHTML={{ __html: injectAnchors(message.text) }}/>
        {!!message.files.length &&
            <div className="message__files">
                {message.files.map(file => <DownloadFile color={own? "white" : "grey6"} key={file.id} file={file}/>)}
            </div>
        }
        {!!message.images && !!message.images.length &&
            <div className="message__images">
                {message.images.map(src => <img src={src} alt={"image"} className="message__image" />)}
            </div>
        }
    </div>;

    if (own) {
        return <div className="message_own"> {body} </div>;
    }

    return <div className="message">
        <img src={message.author.avatarUrl} alt={message.author.name} className="message__avatar"/>
        <div className="message__block">
            <div className="message__author">{message.author.name}</div>
            {body}
        </div>
    </div>
}
