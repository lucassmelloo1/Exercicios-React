import React, { useState, useEffect } from "react";
import "./Desafio.css";

export function Desafio() {
  //a lista das cores
  const cores = ["#00A86B", "#FF4500", "#F8DE7E", "#8EE53F"];
  //useState relacionado ao array de cores
  const [corAtual, setCorAtual] = useState(cores[0]);

  //useEffect que  troca a cor de fundo do componente
  useEffect(() => {
    document.body.style.backgroundColor = corAtual;
  }, [corAtual]);

  //uma arrow function que seleciona uma cor do array 
  const trocarCor = () => {
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    setCorAtual(novaCor);
  };

  return (
    <>
      <div id="alvo">
        <h1>Cor atual - {corAtual}</h1>
        <button onClick={trocarCor}>Clique aqui!</button>
      </div>
    </>
  );
}
