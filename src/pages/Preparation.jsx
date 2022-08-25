import WebCam from "react-webcam";
import "./Preparation.scss";
import React, {useCallback, useRef, useState} from "react";
import {RiUser2Fill} from "react-icons/ri";
import {useNavigate, useParams} from "react-router-dom";
import { useFormik } from "formik"
import { store } from "../components/room";
import {Button} from "../components/ui/button/Button";
import { Background } from "../components/ui/background/Background";

export function Preparation() {
    const [avatarSrc, setAvatarSrc] = useState("");
    const [placeholder, setPlaceholder] = useState("Ваше имя:");

    const formik = useFormik({
        initialValues: { username: "", microfone: "", camera: "", outScreen: "" }
    });

    const webCamRef = useRef(null);
    const capture = useCallback(() => {
        setAvatarSrc(webCamRef.current.getScreenshot());
    }, [webCamRef]);
    const params = useParams();
    const navigate = useNavigate();

    return <div className="preparation">
        <Background />
        <form className="preparation__form" onSubmit={e => {
            e.preventDefault();
            if (formik.values.username) {
                store.setState(
                    "user",
                    {
                        ...store.getState("user"),
                        name: formik.values.username
                    });
                navigate("/room/" + params.roomId);
            } else {
                setPlaceholder("Нам необходимо знать ваше имя!!!")
            }
        }}>
            <div className="preparation__camera">
                <div className="preparation__camera-container">
                    <WebCam
                        mirrored={true}
                        ref={webCamRef}
                        audio={false}
                        height={500}
                        screenshotFormat="image/jpeg"
                        width={500}
                    />
                </div>
            </div>
            <div className="preparation__fields">
                Нажмите на аватар, чтобы зафиксировать:
                <div className="preparation__avatar-toggle">
                    <span
                        className={"preparation__avatar " + (avatarSrc ? "preparation__avatar_active" : "")}
                        onClick={capture}
                    >
                        <div className="preparation__avatar-img">
                            {avatarSrc?
                                <img src={avatarSrc} alt="avatar"/>
                                :
                                <WebCam
                                    mirrored={true}
                                    audio={false}
                                    height={150}
                                    screenshotFormat="image/jpeg"
                                    width={150}
                                />
                            }
                        </div>
                    </span>
                    <span
                        onClick={() => setAvatarSrc("")}
                        className={"preparation__avatar-none " + (avatarSrc ? "" : "preparation__avatar_active")}
                    >
                        <div className="preparation__avatar-icon">
                            <RiUser2Fill />
                        </div>
                        <div className="preparation__avatar-text">
                            Без <br /> аватара
                        </div>
                    </span>
                </div>

                <label className="preparation__field" htmlFor="username">
                    {placeholder}
                    <input id="username" type="text" {...formik.getFieldProps("username")} />
                </label>
                <label className="preparation__field" htmlFor="microfon">
                    Микрофон:
                    <input id="microfon" type="text" {...formik.getFieldProps("microfone")}/>
                </label>
                <label className="preparation__field" htmlFor="camera">
                    Камера:
                    <input id="camera" type="text" {...formik.getFieldProps("camera")}/>
                </label>
                <label className="preparation__field" htmlFor="out-screen">
                    Показ экрана:
                    <input id="out-screen" type="text" {...formik.getFieldProps("outScreen")}/>
                </label>
                <Button
                    style={{
                        opacity: formik.values.username ? 1 : 0,
                        transform: `scale(${formik.values.username ? 1 : 0})`,
                        marginTop: 10
                    }}
                    primary
                    type="submit"
                >
                    Подключиться
                </Button>
            </div>
        </form>
    </div>
}