import React from 'react';

const Product = () => {

  const products = [
    {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
    {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']},
  ];

  return (
    <div>
      <h1 style={{color: "green"}}>Produtos</h1>
      {products.map((item) => (
        <div style={{border: "1px solid black", margin: "1rem 0"}} key={item.nome}>
          {item.nome}
          <ul>
            {item.propriedades.map((config, index) => (
              <li key={index}>{config}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Product;