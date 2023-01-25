import { useEffect, useState } from "react";
import api from '../../services/api'

import { Header, Sidebar, UltimoResultado, Searchbar, Resultado } from "../../Componentes";
import { Cadastro, Entrar } from "../../Popups"

import { mapeiaNomeAnimal, mapeiaSrcAnimal } from "../../Utils/mapeiaAnimal";

import "./index.css";

interface jogosType {
  gameId: number;
  data: string;
  number1: string;
  number2: string;
  number3: string;
  number4: string;
  number5?: string;
}

export const Inicial = () => {

  const [showCadastro, setCadastro] = useState(false);
  const [showEntrar, setEntrar] = useState(false);
  const [sidebar, setSidebar] = useState(true)

  const jogosIniciais: jogosType[] = [{
    gameId: 0,
    data: "",
    number1: "",
    number2: "",
    number3: "",
    number4: "",
  }];

  const [ jogos, setJogos ] = useState(jogosIniciais);

  useEffect(() => {
    api.get("/").then((response: any) => {
      setJogos(response.data);
    })
  }, []);

  return (
    <div className="inicial">
      <Header
        abreCadastro={ () => {setCadastro(true)}}
        fechaCadastro={() => {setCadastro(false);}}
        abreEntrar={() => {setEntrar(true);}}
        fechaEntrar={() => {setEntrar(false);}}
        toggleSidebar={() => setSidebar(anterior => !anterior)}
      />

      <main>
        {sidebar && <Sidebar />}
        <section className="conteudo-principal-inicial">
          {
            <UltimoResultado
              fotoSrc={mapeiaSrcAnimal(jogos.at(-1)?.number1)}
              animal={mapeiaNomeAnimal(jogos.at(-1)?.number1)}
              milhares={[jogos.at(-1)?.number1 || "", jogos.at(-1)?.number2 || "", jogos.at(-1)?.number3 || "", jogos.at(-1)?.number4 || ""]}
            />
          }
          <Searchbar />
          <div className="resultados-anteriores">
            {jogos.map((jogo, index) => {
              const { number1, number2, number3, number4 } = jogo;
              
              const nome = mapeiaNomeAnimal(number1);
              const src = mapeiaSrcAnimal(number1);

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

      {showEntrar && <Entrar fechaEntrar={() => {setEntrar(false);}} />}
      {showCadastro && <Cadastro fechaCadastro={() => {setCadastro(false);}} />}

    </div>
  );
}
