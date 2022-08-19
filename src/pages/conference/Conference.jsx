import React, {useState} from 'react';
import './Conference.scss';
import logo from "./grey-logo.png";
import {Icon} from "../../components/ui/icon/Icon";
import {Windows} from "../../components/windows/Windows";
import homeSvg from "./home.svg";
import cameraSvg from "./camera-enable.svg";
import cameraDisableSvg from "./camera-disable.svg";
import calendarSvg from "./calendar_month.svg";
import settingsSvg from "./settings.svg";

export function Conference() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="conference">
            <div className="conference__menu">
                <img className="conference__logo" src={logo} alt="logo" />

                <div className="conference__links">
                    <Icon pointer src={homeSvg} textGrey6 iconSize={36} />
                    <Icon
                        pointer
                        src={cameraSvg}
                        crossSrc={cameraDisableSvg}
                        disable={toggle}
                        onClick={() => setToggle(!toggle)}
                        blue
                        iconSize={36}
                    />
                    <Icon pointer src={calendarSvg} textGrey6 iconSize={36} />
                </div>

                <Icon pointer src={settingsSvg} textGrey6 />
            </div>
            <div className="conference__body">
                <Windows />
            </div>
            <div className="conference__right-column"></div>
        </div>
    );
}
