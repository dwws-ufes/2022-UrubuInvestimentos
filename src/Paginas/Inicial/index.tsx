import React, { useEffect, useState } from "react";
import api from '../../services/api'

// import { useSelector, useDispatch } from "react-redux";
import { atualizaJogos, selectJogos } from "../../store/loginSlice";

import { Header } from "../../Componentes/Header";
import { Sidebar } from "../../Componentes/Sidebar";
import { UltimoResultado } from "../../Componentes/UltimoResultado";
import { Searchbar } from "../../Componentes/Searchbar";
import { Resultado } from "../../Componentes/Resultado";

import { Cadastro } from "../../Popups/Cadastro"
import { Entrar } from "../../Popups/Entrar";

import { mapeiaNomeAnimal, mapeiaSrcAnimal } from "../../Utils/mapeiaAnimal";

import "./index.css";

export const Inicial = () => {

  // const jogos = useSelector(selectJogos);
  // const dispatch = useDispatch();

  const [showCadastro, setCadastro] = useState(false);
  const [showEntrar, setEntrar] = useState(false);
  const [sidebar, setSidebar] = useState(true)

  const [ jogos, setJogos ] = useState([]);

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

  useEffect(() => {
    api.get("").then((response: any) => {
      const { data } = response;

      setJogos(data);
    })
  }, []);

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
        <section className="conteudo-principal-inicial">
          <UltimoResultado
            fotoSrc={"imagens/animais/rato.jpeg"}
            animal={"cágado"}
            milhares={["1234", "4567", "8901", "2345"]}
          />
          <Searchbar />
          <div className="resultados-anteriores">
            {jogos.map((jogo, index) => {
              const { gameId, number1, number2, number3, number4  } = jogo;
              
              const nome = mapeiaNomeAnimal(number1);
              const src = mapeiaSrcAnimal(number1);

              console.log(src)

              return (
                <Resultado
                  src={src}
                  key={index}
                  dia="ONTEM"
                  animal={nome}
                  milhares={[number1, number2, number3, number4]}
                />
              );
            })}
          </div>
        </section>
      </main>

      {showEntrar && <Entrar fechaEntrar={fechaEntrar} />}
      {showCadastro && <Cadastro fechaCadastro={fechaCadastro} />}

    </div>
  );
}
