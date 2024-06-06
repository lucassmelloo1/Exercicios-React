import { useState, useEffetct } from "react";

export function ListaInterna() {
  const marca = [
    { id: 1, nome: "Nike" },
    { id: 2, nome: "Adidas" },
    { id: 3, nome: "Puma" },
    { id: 4, nome: "Umbro" },
  
  ];

  const [listaMarca, setlistaMarca] = useState(marca);
  const [novaMarca, setNovaMarca] = useState("");

  function adicionarMarca() {
    if (novaMarca.trim() !== "") {
      const EntradanovaMarca = {
        id: listaMarca.length + 1,
        nome: novaMarca,
      };

      setlistaMarca([...listaMarca, EntradanovaMarca]);
      setNovaMarca("");
    }
  }

  return (
    <>
      <h4>Lista de Marcas</h4>
      <ul>
        {listaMarca.map((marca) => (
          <li key={marca.id}>
            {marca.id} - {marca.nome}
          </li>
        ))}
      </ul>

      <br />
      <br />
      <br />

      <input
        type="text"
        value={novaMarca}
        onChange={(e) => setNovaMarca(e.target.value)}
        placeholder="Adicionar nova marca"
      />
      <button onClick={adicionarMarca}>Enviar</button>
    </>
  );
}
