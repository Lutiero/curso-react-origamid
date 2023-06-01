import React from "react";
import Input from "./Form/Input.jsx";

const App = () => {
    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {

        if(!value.length){
            setError('Preencha com algum valor');
            return false;
        } else if(!/^\d{5}-?\d{3}$/.test(value)) {
            setError('Preencha com um campo válido');
            return false;
        } else {
            setError(null);
            return true;
        }
    }
    function handleBlur({target}) {
        validate(target.value);
    }

    function handleChange({target}) {
        if (error) validate(target.value);
        setCep(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        validate(cep) ? console.log('enviou') : console.log('não enviou');
    }

    return (<>
        <form onSubmit={handleSubmit}>
        <Input
            type="text"
            id="cep"
            label="CEP"
            placeholder="00000-000"
            value={cep}
            onChange={handleChange}
            onBlur={handleBlur}
        />
            <button>Enviar</button>
        </form>
        {cep}
        {error && <p>{error}</p>}
    </>)

}

export default App;
