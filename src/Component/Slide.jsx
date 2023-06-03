import React from 'react';
import styles from './Slide.module.css'
import {act} from "react-dom/test-utils";

const Slide = ({slides}) => {

    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    React.useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition( -(width * active));
    }, [active])
    function slidePrevious() {
        if(active < 1) return
        setActive(active - 1);
    }

    function slideNext(){
        if(active >= slides.length - 1) return
        setActive(active + 1);

    }

    return (<section className={styles.container}>
        <div ref={contentRef} className={styles.content}
             style={{transform: `translateX(${position}px)`}}>
            {slides.map((slide) => (
                <div className={styles.item} key={slide.id}>
                    {slide.content}
                </div>
            ))}
        </div>
        <nav className={styles.nav}>
            <button
                onClick={slidePrevious}>
                Anterior
            </button>
            <button
                onClick={slideNext}>
                Próximo
            </button>
        </nav>
        {position}
    </section>);
};

export default Slide;