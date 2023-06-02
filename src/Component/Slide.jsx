import React from 'react';
import styles from './Slide.module.css'

const Slide = ({slides}) => {

    const [active, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const contentRef = React.useRef();

    function slidePrevious() {
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(position + width);
        console.log(contentRef.current.getBoundingClientRect())
    }

    function slideNext(){
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(position - width);
        console.log(contentRef.current.getBoundingClientRect())

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