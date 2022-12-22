import { Resultado } from "./../../Componentes";

import "./index.css";

interface resultadoPerfilProps {
  src: string;
  dia: string;
  animal: string;
  milhares: string[] | number[];
  leadingMsg: string;
  valorJogado: string;
  status: string;
  valorInvestido: string | number;
  valorRecebido: string | number;
  odds: string | number;
}

export const ResultadoPerfil = (props: resultadoPerfilProps) => {
  const { src, dia, animal, milhares, leadingMsg, valorJogado, status, valorInvestido, valorRecebido, odds } = props;
  return (
    <div className="resultado-jogo">
      <div className="resultado-img">
        <Resultado
          src={src}
          dia={dia}
          animal={animal}
          milhares={milhares}
        />
      </div>
      <div className="resultado-msg">
        <h2 className="leading-msg">{leadingMsg}</h2>
        <h3 className="animal-msg">{animal}</h3>
        <p className="jogo-msg">{valorJogado}</p>
        <h3 className="status-msg">{status}</h3>
        <p className="valor-investido-msg">{valorInvestido}</p>
        <p className="valor-recebido-msg">{valorRecebido}</p>
        <p className="odds-msg">{odds}</p>
      </div>
    </div>
  )
}

export default ResultadoPerfil;
