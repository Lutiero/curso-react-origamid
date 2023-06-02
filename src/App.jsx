import React from "react";
import Input from "./Form/Input.jsx";
import useForm from "./Hooks/useForm.jsx";

const App = () => {
  const nome = useForm();
  const sobrenome = useForm(false);
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    (nome.validate() & cep.validate() & email.validate()) ? console.log('enviou') : console.log('não enviou');
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <Input
          type="text"
          id="nome"
          label="Nome"
          value={nome.value}
          {...nome}
      />
      <Input
          type="text"
          id="sobrenome"
          label="Sobrenome"
          value={sobrenome.value}
          {...sobrenome}
      />
      <Input
        type="text"
        id="cep"
        label="CEP"
        placeholder="00000-000"
        value={cep.value}
        {...cep}
      />
      <Input
        type="email"
        id="email"
        label="email"
        placeholder="fulano@ciclano.com"
        value={email.value}
        {...email}
      />
      <button>Enviar</button>
    </form>
  </>)

}

export default App;
