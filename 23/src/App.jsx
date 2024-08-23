import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HelloWord from './assets/Componentes/HelloWord';
import Aluno from './assets/Componentes/Aluno';

function App() {

  return (
    <>
      <HelloWord />
      <Aluno nome = "Cidade" email="cidade@email.com"/>
    </>
  )
}

export default App;
