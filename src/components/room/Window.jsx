import React from 'react';
import './Window.scss';
import { store } from "./index"
import {useWindow} from "./useWindow";
import {Icon} from "../ui/icon/Icon";
import userSvg from "./person.svg";

export function Window({ clientid }) {
  const [room] = store.useState("room");
  const { isLoading } = useWindow(clientid);

  return <div className="window">
    <Icon src={userSvg} size={120} iconSize={67} textWhite />
  </div>;
}
