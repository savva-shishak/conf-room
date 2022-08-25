import {useWindow} from "./room/useWindow";

export function FullScreenWindow({clientId}) {
    const {client, waving, audio} = useWindow(clientId);

    return <div className="fullscreen">

    </div>
}