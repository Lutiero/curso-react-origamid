import React from "react";
import Produto from "./components/Produto.jsx";


const App = () => {
    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    function handleClick(event) {
        let url = `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`;
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setDados(json);
                setLoading(false);
            });


    }


    return (<>
            <button style={{margin: "0.5rem"}} onClick={handleClick}>notebook</button>
            <button style={{margin: "0.5rem"}} onClick={handleClick}>smartphone</button>
            <button style={{margin: "0.5rem"}} onClick={handleClick}>tablet</button>
            {loading && <p>Carregando...</p>}
            {!loading && dados && <Produto dados={dados}/>}
        </>)
}

export default App;
