import { useState } from "react";

import { Header, Sidebar, BotaoGenerico, ResultadoPerfil } from "./../../Componentes";
import { Cadastro, Entrar } from "./../../Popups";

import CONTENTS from "../../Content/Pages/ResultadosPerfil.json"
import styles from "./index.module.css";

const Contents = CONTENTS["pt-Br"];

export const ResultadosPerfil = () => {

  const [showCadastro, setCadastro] = useState(false);
  const [showEntrar, setEntrar] = useState(false);
  const [sidebar, setSidebar] = useState(true)

  return (
    <div className={styles.inicial}>
      <Header
        abreCadastro={() => {setCadastro(true)}}
        fechaCadastro={() => {setCadastro(false);}}
        abreEntrar={() => {setEntrar(true);}}
        fechaEntrar={() => {setEntrar(false);}}
        toggleSidebar={() => setSidebar(anterior => !anterior)}
      />
      <main>
        {sidebar && <Sidebar />}
        <section className={styles.conteudo_principal_perfil_resultados}>
          <h1 className={styles.resultados_titulo}> {Contents.Title} </h1>
          <div className={styles.resultados_jogos}>
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
              className={styles.botao}
            />
            <div className={styles.separador_botoes}>
            </div>
            <BotaoGenerico
              texto="Meu perfil"
              href="#"
              fundo={true}
              callback={() => null}
              className={styles.botao}
            />
          </div>
        </section>
      </main>

      {showEntrar && <Entrar fechaEntrar={() => {setEntrar(false);}} />}
      {showCadastro && <Cadastro fechaCadastro={() => {setCadastro(false);}} />}

    </div>
  );
}

export default ResultadosPerfil;
