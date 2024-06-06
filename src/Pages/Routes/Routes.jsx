import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaInterna from '../src/Pages/ListaInterna/ListaInterna';
import Relogio from '../src/Pages/Relogio/Relogio';
import Form from '../src/Pages/FormularioComponentes/Form';
import ListaBusca from '../src/Pages/ListaBusca/ListaBusca';
import Desafio from '../src/Pages/Desafio/Desafio';

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/listainterna" element={<ListaInterna />} />
        <Route path="/relogio" element={<Relogio />} />
        <Route path="/form" element={<Form />} />
        <Route path="/lista-busca" element={<ListaBusca />} />
        <Route path="/desafio" element={<Desafio />} />
      </Routes>
    </Router>
  );
}

export default Rotas;