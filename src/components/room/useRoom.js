import {store} from "./index";


export function useRoom() {
    const [room] = store.useState("room");

    return room;
}
