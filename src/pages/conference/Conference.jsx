import React from 'react';
import './Conference.scss';
import logo from "./grey-logo.png";
import {Icon} from "../../components/ui/icon/Icon";
import {TiHome} from "react-icons/ti";
import {BsCalendar3, BsFillCameraVideoFill} from "react-icons/bs";
import {GiSettingsKnobs} from "react-icons/gi";
import {FiArrowLeft} from "react-icons/fi";
import {HiUsers} from "react-icons/hi";
import {Button} from "../../components/ui/button/Button";
import {Windows} from "../../components/windows/Windows";

export function Conference() {
    return (
        <div className="conference">
            <div className="conference__menu">
                <img className="conference__logo" src={logo} alt="logo" />

                <div className="conference__links">
                    <Icon pointer><TiHome /></Icon>
                    <Icon pointer blue><BsFillCameraVideoFill /></Icon>
                    <Icon ><BsCalendar3 /></Icon>
                </div>

                <Icon pointer rotate={90}><GiSettingsKnobs /></Icon>
            </div>
            <div className="conference__body">
                <div className="conference__head">
                    <Icon pointer white textGrey6 size={36} className="conference__back"><FiArrowLeft /></Icon>
                    Митинг-брифинг А-БТ
                    <div className="conference__users-count">
                        <Icon size={36} textGrey6><HiUsers /></Icon>
                        12
                    </div>
                    <Button>+ Добавить</Button>
                </div>
                <Windows />
            </div>
        </div>
    );
}
