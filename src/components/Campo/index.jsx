import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {

  // Destructuracion
  const { type, titulo, required, placeholder } = props

  return (
    <div className={`campo campo-${type}`} id="grupo__nombre">

    <label className="campo-label">{titulo}</label>

    <a className="campo-container">
      <input 
          placeholder={placeholder}
          required={required}
          type={type}
        />
      <i className="campo__validacion fas fa-times-circle"></i>
    </a>
    <p className="campo__input-error">El nombre tiene que ser de 4 a 16 dígitos y solo puede letras.</p>
    </div>
  );
};

export default Campo;
