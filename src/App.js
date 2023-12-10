import React from 'react';
import { Route } from 'react-router-dom';
import Login from "./pages/Login/Login"
import Notebook from './pages/Notebook/Notebook';

import "./main.css"

function App() {

  const [dados, setDados] = React.useState()

  {/* vai da um GET só e pegar todos os livros. Nao vale a pena ficar consumindo a API livro por livro pra uma quantidade pequena de dados que cada GET vai carregar */}
  React.useEffect(() => {
    fetch("https://api.exemplo.com/dados")
      .then(response => response.json())
      .then(data => setDados(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, [])

  return (
    <div className="App">
      <Notebook 
        dados={dados}
        setDados={setDados}
  />
    {/*<Login />*/}
    </div>
  );
}

export default App;
