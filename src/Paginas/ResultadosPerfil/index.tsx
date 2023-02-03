import { useState } from "react";

import { Header, Sidebar, BotaoGenerico, ResultadoPerfil } from "./../../Componentes";
import { Cadastro, Entrar } from "./../../Popups";

import Content from "../../Content/Pages/ResultadosPerfil.json"
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectLogin, selectDropdown, selectEntrar, selectCadastro, selectSidebar, setEntrar, setCadastro } from "../../store/pageInfoSlice";
import { LoginDropdown } from "../../Popups/LoginDropdown";

export const ResultadosPerfil = () => {

  const logado = useSelector(selectLogin);
	const showDropdown = useSelector(selectDropdown);
  const showEntrar = useSelector(selectEntrar);
  const showCadastro = useSelector(selectCadastro);
  const showSidebar = useSelector(selectSidebar);

  return (
    <div className={styles.inicial}>
      <Header/>

      <main>
        { showSidebar && <Sidebar />}
        <section className={styles.conteudo_principal_perfil_resultados}>
          <h1 className={styles.resultados_titulo}> {Content.Title} </h1>
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

      { showEntrar && <Entrar/> }
			{ showCadastro && <Cadastro/> }
      { showDropdown && <LoginDropdown/> }

    </div>
  );
}

export default ResultadosPerfil;
