import React from 'react';
import './Window.scss';
import { store } from "./index"
import {useWindow} from "./useWindow";

export function Window({ clientid }) {
  const [room] = store.useState("room");
  const { isLoading } = useWindow(clientid);

  return <div className="window">
    user with id {clientid}
    <br />in room {room.id}
    <br /> {isLoading && "Loading..."}
  </div>;
}
