import React from 'react';

const Produto = ({ dados }) => {
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco}</p>
            <p>Descrição: {dados.descricao}</p>
            <p>Vendido: {dados.vendido === "True" ? 'Sim' : 'Não'}</p>
            <p>Vendedor: {dados.usuario_id}</p>
            <div style={{display: "flex", width:"200px", height:"250px", gap: ".5rem", }}>
                {dados.fotos.map(foto => <img key={foto.src} src={foto.src} alt=""/>)}
            </div>
        </div>
    );
};

export default Produto;