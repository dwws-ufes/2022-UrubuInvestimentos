import React, { useState } from "react";

import { Header } from "./../../Componentes/Header";
import { Sidebar } from "./../../Componentes/Sidebar";
import { Cadastro } from "./../../Popups/Cadastro";
import { Entrar } from "./../../Popups/Entrar";
import { BotaoGenerico } from "./../../Componentes/BotaoGenerico";
import ResultadoPerfil from "./../../Componentes/ResultadoPerfil";

import "./index.css";

const ResultadosPerfil = () => {

  const [showCadastro, setCadastro] = useState(false);
  const [showEntrar, setEntrar] = useState(false);
  const [sidebar, setSidebar] = useState(true)

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
    <div className="inicial">
      <Header
        abreCadastro={abreCadastro}
        fechaCadastro={fechaCadastro}
        abreEntrar={abreEntrar}
        fechaEntrar={fechaEntrar}
        toggleSidebar={() => setSidebar(anterior => !anterior)}
      />
      <main>
        {sidebar && <Sidebar />}
        <section className="conteudo-principal-perfil-resultados">
          <h1 className="resultados-titulo"> Resultados </h1>
          <div className="resultados-jogos">
            <ResultadoPerfil src="/imagens/animais/cagado.jpeg"
              dia="ONTEM"
              animal="CÁGADO"
              milhares={["1234", "5678", "9012", "3456"]}
              leadingMsg="Seu investimento"
              valorJogado="6 7"
              status="VOCÊ GANHOU!!!"
              valorRecebido="Valor investido: $10,00"
              valorInvestido="Valor recebido: $100,00"
              odds="Odds: 10:1"
            />
            <ResultadoPerfil src="/imagens/animais/cagado.jpeg"
              dia="ONTEM"
              animal="CÁGADO"
              milhares={["1234", "5678", "9012", "3456"]}
              leadingMsg="Seu investimento"
              valorJogado="6 7"
              status="VOCÊ GANHOU!!!"
              valorRecebido="Valor investido: $10,00"
              valorInvestido="Valor recebido: $100,00"
              odds="Odds: 10:1"
            />
            <ResultadoPerfil src="/imagens/animais/cagado.jpeg"
              dia="ONTEM"
              animal="CÁGADO"
              milhares={["1234", "5678", "9012", "3456"]}
              leadingMsg="Seu investimento"
              valorJogado="6 7"
              status="VOCÊ GANHOU!!!"
              valorRecebido="Valor investido: $10,00"
              valorInvestido="Valor recebido: $100,00"
              odds="Odds: 10:1"
            />
          </div>
          <div className="resultados-botoes">
            <BotaoGenerico
              texto="Continuar investindo"
              href="#"
              fundo={true}
              callback={() => null}
              className="botao"
            />
            <div className="separador-botoes">
            </div>
            <BotaoGenerico
              texto="Meu perfil"
              href="#"
              fundo={true}
              callback={() => null}
              className="botao"
            />
          </div>
        </section>
      </main>

      {showEntrar && <Entrar fechaEntrar={fechaEntrar} />}
      {showCadastro && <Cadastro fechaCadastro={fechaCadastro} />}

    </div>
  );
}

export default ResultadosPerfil;
