import {Icon} from "../ui/icon/Icon";
import "./Download.scss";
import downloadSvg from "./download.svg";
import descriptionSvg from "./description.svg";

export function DownloadFile({ file, color = "grey6" }) {
    return <div className="file">
        <div className="file__info">
            {file.img ?
                <img src={file.img} alt="file" className="file__img"/>
                :
                <Icon
                    src={descriptionSvg}
                    size={36}
                    iconSize={20}
                    {...({ ["text" + color]: true })}
                />
            }
            <div style={{ color }} className="file__text">
                <div className="file__name">{file.name}</div>
                <div className="file__size">{file.size}</div>
            </div>
        </div>
        <Icon
            src={downloadSvg}
            pointer
            size={20}
            iconSize={20}
            noround
            {...({ ["text" + color]: true })}
        />
    </div>
}