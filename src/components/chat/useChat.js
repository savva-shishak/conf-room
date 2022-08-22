import {store} from "../room";

export function useChat() {
    const [{ list: messages = [] }] = store.useState("messages");
    const [{ list: participants = [] }] = store.useState("participants");

    return {
        messages,
        getMessage(id) {
            const message = messages.find(msg => msg.id === id);

            return {
                ...message,
                author: participants.find(participant => participant.peedID === message.authorPeedID),
            }
        }
    };
}