import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'
import { MainCard } from './components/MainCard'
import { Searchbar } from './components/Searchbar'
import { SmallCard } from './components/SmallCard'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header className='Urubu-logo'/>
      <main>
        <Sidebar />
        <div id="main-content">
          <MainCard titulo="Pacote de Boas Vindas" descricao='Ganhe coisas legais'/>
          <Searchbar />

          <div id='small-cards-section'>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
            <SmallCard titulo="Ola" descricao='Ola 123 testando'/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
