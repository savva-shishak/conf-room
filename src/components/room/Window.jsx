import React from 'react';
import './Window.scss';
import {Icon} from "../ui/icon/Icon";
import userSvg from "./person.svg";

export function Window() {
  return <div className="window">
    <Icon src={userSvg} size={120} iconSize={67} textWhite />
  </div>;
}
