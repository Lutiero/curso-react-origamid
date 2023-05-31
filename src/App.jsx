import React, {useState} from "react";

const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text'
    },
    {
        id: 'email',
        label: 'Email',
        type: 'email'
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password'
    },
    {
        id: 'cep',
        label: 'CEP',
        type: 'text'
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text'
    },
    {
        id: 'numero',
        label: 'Número',
        type: 'text'
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text'
    }, {
        id: 'cidade',
        label: 'Cidade',
        type: 'text'
    }, {
        id: 'estado',
        label: 'Estado',
        type: 'text'
    },
]

const App = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        senha: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
    });
    const [resposta, setResposta] = useState(null);


    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        }).then((response) => {
            setResposta(response);
        })
    }

    function handleChange({target}) {
        const {id, value} = target;
        setForm({...form, [id]: value});
    }


    return (<div>
        <form onSubmit={handleSubmit}>
            {formFields.map(({id, label, type}) => (
                <div>
                    <label htmlFor={id}>{label}</label>
                    <input
                        id={id}
                        type={type}
                        name={id}
                        value={form[id]}
                        onChange={handleChange}
                    />
                </div>
            ))}
            <button>Enviar</button>
        </form>
        {resposta && 'Usuario criado'}
    </div>)

}

export default App;
