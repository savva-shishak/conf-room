import {store} from "../room";
import {useState} from "react";

export function useChat() {
    const [{ list: messages = [] }] = store.useState("messages");
    const [{ list: participants = [] }] = store.useState("participants");
    const [preview, setPreview] = useState({ text: "",  images: [], files: [] });

    return {
        messages,
        getMessage(id) {
            const message = messages.find(msg => msg.id === id);

            return {
                ...message,
                author: participants.find(participant => participant.peedID === message.authorPeedID),
            }
        },
        preview,
        setPreview,
        showPreview: preview.text || !!preview.files.length || !!preview.images.length
    };
}