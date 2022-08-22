import "./Carousel.scss";
import {Window} from "../room";
import {useSpring, animated} from "react-spring";
import {useEffect, useRef} from "react";

export function Carousel({ clients }) {
    const ref = useRef(null);

    const containerStyle = useSpring({
        gridTemplateColumns: `repeat(${clients.length}, 335px)`
    });

    useEffect(() => {
        function handler(e) {
            if(e) {
                const side = e.deltaY > 0 ? 1 : -1;
                ref.current.scrollBy(55 * side, 0);
                let ticks = 0;

                setTimeout(tick, 5);

                function tick() {
                    if (ticks < 10) {
                        ref.current.scrollBy(30 * side, 0);
                        ticks++;
                        setTimeout(tick, 20);
                    }
                }

            }
        }

        if (ref.current) {
            ref.current.addEventListener("wheel", handler);
        }

        return () => ref.current && ref.current.removeEventListener("wheel", handler);
        // если сделать так, как еслинт требует, то вертикальная прокрутка работает не сразу
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [ref.current]);

    return <div className="windows-carousel windows__screen">
        <div><Window clientid={1} /></div>
        <div ref={ref} className="windows-carousel__container">
            <animated.div style={containerStyle} className="windows-carousel__slides">
                {clients.map(client => <div className="windows-carousel__slide"><Window clientid={client} /></div> )}
            </animated.div>
        </div>
    </div>
}