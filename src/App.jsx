import React from "react";
import Produto from "./components/Produto.jsx";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = () => {
    const [dados, setDados] = React.useState([]);

    function handleClick(event) {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
            .then(response => response.json()
                .then(json => {
                    setDados(json)
                }))
        localStorage.setItem("item", `${event.target.innerText}`);
    }

    React.useEffect(() => {
        const localStorageData = localStorage.getItem("item")
        if (localStorageData) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${localStorageData}`)
                .then(response => response.json()
                    .then(json => {
                        setDados(json)
                    }))
        }

    }, []);

    return (<>{dados && (<div><h1>{dados.nome}</h1></div>)}
        <button style={{margin: "0.5rem"}} onClick={handleClick}>smartphone</button>
        <button style={{margin: "0.5rem"}} onClick={handleClick}>notebook</button>
        <Produto dados={dados}/>
    </>)
}

export default App;
