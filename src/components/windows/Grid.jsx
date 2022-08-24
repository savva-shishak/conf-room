import "./Grid.scss";
import {Window} from "../room";

export function Grid({ clients }) {
    return <div className="windows-grid windows__screen">
        {clients.map(client => <Window key={client} clientid={client} />)}
    </div>
}