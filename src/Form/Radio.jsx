import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {
    if(active === false) return null;
    return (
        <fieldset style={{padding: "2rem", marginBottom: "1rem", border: "2px solid #eee" }}>
            <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
            {options.map((option) => (
                <label key={option} style={{fontFamily: "monospace", padding: "0.1rem"}}>
                    <input type="radio" id={id} checked={value === option} value={option} onChange={onChange}/>{option}
                </label>
            ))}

        </fieldset>
    );
};

export default Radio;