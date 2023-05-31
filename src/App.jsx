import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage.jsx";
import useFetch from "./Hooks/useFetch.jsx";


const App = () => {
    const [produto, setProduto] = useLocalStorage('produto', '');
    const {request, data, loading, error} = useFetch();

    React.useEffect(() => {
        async function fetchData() {
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
            console.log(response)
            console.log(json)
        }
        fetchData();
    }, [request]);

    function handleClick({target}) {
        setProduto(target.innerText);
    }

    if (loading) return <p>CARREGANDO...</p>;
    if (error) return <h1>ERROR</h1>;
    if (data)
        return (<div>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <hr/>
            {data.map((produto) => (
                <li key={produto.id}>{produto.nome}</li>
            ))}
        </div>)
    else return null;
}

export default App;
