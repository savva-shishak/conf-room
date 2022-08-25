import React from 'react';
import './Window.scss';
import {Icon} from "../ui/icon/Icon";
import userSvg from "./person.svg";
import audioSvg from "./audio-enabled.svg";
import audioDisableSvg from "./audio-disabled.svg";
import wavingSvg from "./waving_hand.svg";
import {useWindow} from "./useWindow";

export function Window({ clientid: clientId, iconSize = { icon: 16, container: 36 } }) {
  const { client, audio, waving } = useWindow(clientId);

  return <div className="window">
    <Icon src={userSvg} size={120} iconSize={67} textWhite />
    <div style={{ fontSize: iconSize.icon + "px" }} className="window__username">
      <Icon src={userSvg} size={iconSize.icon} iconSize={iconSize.icon} noround textWhite />
      {client.name}
    </div>
    <div className="window__audio">
      <Icon
          src={audioSvg}
          crossSrc={audioDisableSvg}
          size={iconSize.container}
          iconSize={iconSize.icon}
          disable={audio}
          blue={audio}
          white={!audio}
          textGrey6={!audio}
      />
    </div>
    <div className="window__waving">
      <Icon
          src={wavingSvg}
          textTransparent={!waving}
          blue={waving}
          size={iconSize.container}
          iconSize={iconSize.icon}
      />
    </div>
  </div>;
}
