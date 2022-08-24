import "./Carousel.scss";
import {Window} from "../room";
import {useSpring, animated} from "react-spring";

export function Carousel({ clients }) {
    const containerStyle = useSpring({
        gridTemplateColumns: `repeat(${clients.length}, 335px)`
    });

    return <div className="windows-carousel windows__screen">
        <div><Window clientid={1} /></div>
        <div 
            className="windows-carousel__container"
            onWheel={e => {
                const  carousel = e.currentTarget;
                const side = e.deltaY > 0 ? 1 : -1;
                carousel.scrollBy(55 * side, 0);
                let ticks = 0;
    
                setTimeout(tick, 5);
    
                function tick() {
                    if (ticks < 10) {
                        carousel.scrollBy(30 * side, 0);
                        ticks++;
                        setTimeout(tick, 20);
                    }
                }
            }} 
        >
            <animated.div style={containerStyle} className="windows-carousel__slides">
                {clients.map(client => <div key={client} className="windows-carousel__slide"><Window clientid={client} /></div> )}
            </animated.div>
        </div>
    </div>
}