import "./Split.scss";
import {Window} from "../room";

export function Split({ clients }) {
    return <div className="windows-split windows__screen">
        {clients.map(client => <Window clientid={client} />)}
    </div>
}