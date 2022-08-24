import {DownloadFile} from "../downloadfile/DownloadFile";
import "./Message.scss";
import {store} from "../room";

/* eslint-disable no-useless-escape */
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

export function Message({ message, preview }) {

    const [{ peedID }] = store.useState("user");

    const own = message.authorPeedID === peedID;

    const body = <div className="message__body">
        <div className="message__text" dangerouslySetInnerHTML={{ __html: injectAnchors(message.text) }}/>
        {!!message.files.length &&
            <div className="message__files">
                {message.files.map(file => <DownloadFile color={own? "white" : "grey6"} key={file.id} file={file}/>)}
            </div>
        }
        {!!message.images && !!message.images.length &&
            <div className="message__images">
                {message.images.map(src => <img key={src} src={src} alt={"message_img"} className="message__image" />)}
            </div>
        }
    </div>;

    if (preview) {
        return <div className="message_preview"> {body} </div>;
    }

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

export function PreviewMessage({ text, images, files, onRemoveImage, onRemoveFile }) {
    return <div className="message_preview">
        <div className="message__body">
            <div className="message__text" dangerouslySetInnerHTML={{ __html: injectAnchors(text) }}></div>
            <div className="message__files">
                {files.map(file => <DownloadFile color="grey6" key={file.id} file={file}/>)}
            </div>
            <div className="message__images">
                {images.map(src => <img key={src} src={src} alt={"message_img"} className="message__image" />)}
            </div>
        </div>
    </div>
}