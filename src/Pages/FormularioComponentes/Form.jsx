import React, { useState } from "react";
import { Input } from "../FormularioComponentes/Componentes/Insput/Input";
import { Botao } from "../FormularioComponentes/Componentes/Botao/Botao";
export function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log("Valor do Input: ", inputValue);
  };

  return (
    <>
      <h2>Exemplo de Formulário</h2>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleInputChange} />
        <Botao texto="Enviar" />
      </form>
    </>
  );
}