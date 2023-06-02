import React from "react";
import Radio from "./Form/Radio.jsx";

const perguntas = [
    {
        pergunta: 'Qual método é utilizado para criar componentes?',
        options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()',
        ],
        resposta: 'React.createElement()',
        id: 'p1',
    },
    {
        pergunta: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: 'p2',
    },
    {
        pergunta: 'Qual hook não é nativo?',
        options: ['useEffect()', 'useFetch()', 'useCallback()'],
        resposta: 'useFetch()',
        id: 'p3',
    },
    {
        pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: ['set', 'get', 'use'],
        resposta: 'use',
        id: 'p4',
    },
];
const App = () => {
    const [respostas, setRespostas] = React.useState({
        p1: '',
        p2: '',
        p3: '',
        p4: ''
    });

    const [slide, setSlide] = React.useState(0);
    const [resultado, setResultado] = React.useState(null)

    function handleChange({target}) {
        setRespostas({...respostas, [target.id]: target.value})
    }

    function resultadoFinal() {
        const corretas = perguntas.filter(
            ({resposta, id}) => {
                return respostas[id] === resposta;
            });
        setResultado(`Você acertou: ${corretas.length} / ${perguntas.length}`);
    }

    function handleClick(event) {
        event.preventDefault();
        if (slide < perguntas.length - 1) {
            setSlide(slide + 1);
        } else {
            resultadoFinal();
            setSlide(slide + 1);

        }
    }

    return (<>
        <form>
            {perguntas.map((pergunta, index) => (
                <Radio
                    {...pergunta}
                    value={respostas[pergunta.id]}
                    onChange={handleChange}
                    key={pergunta.id}
                    active={slide === index}
                />
            ))}
            {resultado ? resultado :
                <button
                    style={{marginTop: ".5rem"}}
                    onClick={handleClick}>
                    {slide < 3 ? "Próxima" : "Finalizar"}
                </button>
            }
        </form>
    </>)

}

export default App;
