import React from "react";
import Slide from "./Component/Slide.jsx";


const App = () => {

    const [slides, setSlides] = React.useState([{
        id: 1, content: 'Slide 1'
    }, {
        id: 2, content: 'Slide 2'
    }, {
        id: 3, content: 'Slide 3'
    }]);

    return (
        <>
            <Slide slides={slides}/>
        </>)

}

export default App;
