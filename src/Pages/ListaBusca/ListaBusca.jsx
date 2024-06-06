import { useEffect, useState } from "react";
import { Input } from "./Input";

export function ListaBusca() {
  const marca = [
    { id: 1, nome: "Nike" },
    { id: 2, nome: "Adidas" },
    { id: 3, nome: "Puma" },
    { id: 4, nome: "Umbro" },
   
  ];

  const [marcaBusca, setmarcaBusca] = useState("");
  const [marcafiltrados, setmarcafiltrados] = useState(marca);

  useEffect(() => {
    const marcafiltrados = marca.filter((marca) =>
      marca.nome.toLowerCase().includes(marcaBusca.toLowerCase())
    );
    setmarcafiltrados(marcafiltrados);
  }, [marcaBusca]);

  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Digite a marca que você quer buscar"
          value={marcaBusca}
          onChange={(e) => setmarcaBusca(e.target.value)}
        />
        <ul>
          {marcafiltrados.map((item) => (
            <li key={item.id}>
              {item.id} - {item.nome}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
