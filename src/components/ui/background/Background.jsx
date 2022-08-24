import { useEffect, useState } from "react";
import "./Background.scss";

function PostPrint({ char, time }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), time);
    }, []);

    return <span className="background__char" style={{ opacity: +show }}>{char}</span>
}

const line1 = "Видео-".split("");
const line2 = "конф-".split("");
const line3 = "еренции".split("");

export function Background({ animationDelay = 0 }) {
    return <div className="background">
        <div className="background__label">
            {line1.map((char, i) => 
                <PostPrint 
                    key={char + i} 
                    char={char} 
                    time={(i + 1) * 500 + animationDelay} 
                />
            )}
            <br />
            {line2.map((char, i) => 
                <PostPrint 
                    key={char + i} 
                    char={char} 
                    time={(i + 1 + line1.length) * 500 + animationDelay} 
                />
            )}
            <br />
            <div className="background__stroke">
                {line3.map((char, i) => 
                    <PostPrint 
                        key={char + i} 
                        char={char} 
                        time={(i + 1 + line1.length + line2.length) * 500 + animationDelay} 
                    />
                )}
            </div>
        </div>
    </div>
}