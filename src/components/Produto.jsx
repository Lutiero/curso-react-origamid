import React from 'react';
import { GlobalContext } from "../Context/GlobalContext.jsx";

const Produto = () => {
    const {dados} = React.useContext(GlobalContext);

    return (
        <div>
            <ul>
                {dados && dados.map((produto) => (
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default Produto;