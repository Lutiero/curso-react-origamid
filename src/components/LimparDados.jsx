import React from 'react';
import {GlobalContext} from "../Context/GlobalContext.jsx";

const LimparDados = () => {
    const {limparDados} = React.useContext(GlobalContext);

    return (
        <button onClick={limparDados}>Limpar</button>
    );
};

export default LimparDados;