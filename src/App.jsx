import { useState } from 'react'
import './App.css'

import { ListaInterna } from "../src/Pages/ListaInterna/ListaInterna";
import { Relogio } from "../src/Pages/Relogio/Relogio";
import { Form } from "../src/Pages/FormularioComponentes/Form";
import { ListaBusca } from "../src/Pages/ListaBusca/ListaBusca";
import { Desafio } from "../src/Pages/Desafio/Desafio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>
        {" "}
        1 - Consuma uma lista interna usando o useState. Crie um botão que
        permita adicionar itens a essa lista. O Item adicionado deve ser
        renderizado em tela.{" "}
      </h3>
      <br />
      <ListaInterna></ListaInterna>
      <br />
      <br />
      <br />
      <h3>
        2 - Criar um componente que retorna nosso horário local e atualiza
        automaticamente na tela - Como um relógio digital.
      </h3>
      <br />
      <Relogio></Relogio>
      <br />
      <br />
      <br />
      <h3>
        3 - Construa um componente que retorna um input, e um componente que
        retorna um botão. Em uma página separada, importe esses componentes,
        fazendo um formulário. Uma vez com o formulário preenchido, o clique do
        botão deve imprimir no console as entradas de dados.
      </h3>
      <br />
      <Form></Form>
      <br />
      <br />
      <br />
      <h3>
        Consuma uma lista de dados internos, e crie uma barra de busca. A barra
        de busca deve filtrar o valor digitado atualizando o componente contendo
        a lista em tela
      </h3>
      <ListaBusca></ListaBusca>
      <br />
      <br />
      <br />
      <h3>
        Usando os hooks useState e useEffect crie uma página que mude a cor do
        fundo de tela toda vez em que um botão for clicado. Adicionalmente, toda
        vez que a cor de fundo for alterada, deve ser mostrado em tela o código
        HEX da cor exibida. Use no máximo 4 cores
      </h3>
      <Desafio></Desafio>
    </>
  );
}

export default App;