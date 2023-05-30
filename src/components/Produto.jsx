import React from 'react';

const Produto = ({dados}) => {
    return (<>{dados && (<div><h2>{dados.nome}</h2></div>)}
        {dados && (<div>
            <div>{dados.preco}</div>
            <div>{dados.descricao}</div>
        </div>)}
    </>)
};

export default Produto;