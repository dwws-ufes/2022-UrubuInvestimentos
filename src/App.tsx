import React, { useState } from 'react';

import './App.css';

import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { MainCard } from './Components/MainCard';
import { Searchbar } from './Components/Searchbar';
import { SmallCard } from './Components/SmallCard';
import { Footer } from './Components/Footer';
import { Cadastro } from './Components/Cadastro'
import { Entrar } from './Components/Entrar';

import { smallcards } from "./smallcards"

function App() {

  const [ showCadastro, setCadastro ] = useState(true);
  const [ showEntrar, setEntrar ] = useState(true);


  const fechaCadastro = () => {
    setCadastro(false);
  }

  const abreCadastro = () => {
    setCadastro(true);
  }

  const fechaEntrar = () => {
    setEntrar(false);
  }

  const abreEntrar = () => {
    setEntrar(true);
  }

  return (
    <div className="App">
      <Header
        className='Urubu-logo'
        abreCadastro={abreCadastro}
        fechaCadastro={fechaCadastro}
        abreEntrar={abreEntrar}
        fechaEntrar={fechaEntrar}
      />
      <main>
        <Sidebar />
        <div id="main-content">
          <MainCard titulo="Pacote de Boas Vindas" descricao='Ganhe coisas legais'/>

          <Searchbar />

          <div id='small-cards-section'>
            {smallcards.map((card, index) => {
              const { titulo, descricao, imagem } = card;
              return <SmallCard
                        key={index}
                        titulo={titulo}
                        descricao={descricao}
                        imagem={imagem}
                      />
            })}
          </div>
        </div>
      </main>
      <Footer />

      { showCadastro && <Cadastro fechaCadastro={fechaCadastro}/> }
      { showEntrar && <Entrar fechaEntrar={fechaEntrar}/>}

    </div>
  );
}

export default App;
