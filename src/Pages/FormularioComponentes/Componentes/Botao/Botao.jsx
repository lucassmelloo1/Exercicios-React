import { React } from "react";
import "./Botao.css";
export function Botao({ texto, tipo }) {
  return (
    <>
      <button className="button" type={tipo}>
        {texto}
      </button>
    </>
  );
}