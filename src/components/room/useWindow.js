import {useState} from "react";
import {store} from "./index";

export function useWindow(clientId) {
    const client = store.useState("participants")[0].list.find(user => user.peedID === clientId);
    const [isLoading] = useState(true);
    const [audio] = useState(Math.random() > 0.5);

    return {
        isLoading,
        client,
        audio,
        waving: true
    }
}