import { Resultado } from "./../../Componentes";

import styles from "./index.module.css";

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
    <div className={styles.resultado_jogo}>
      <div className={styles.resultado_img}>
        <Resultado
          src={src}
          dia={dia}
          animal={animal}
          milhares={milhares}
        />
      </div>
      <div className={styles.resultado_msg}>
        <h2 className={styles.leading_msg}>{leadingMsg}</h2>
        <h3 className={styles.animal_msg}>{animal}</h3>
        <p className={styles.jogo_msg}>{valorJogado}</p>
        <h3 className={styles.status_msg}>{status}</h3>
        <p className={styles.valor_investido_msg}>{valorInvestido}</p>
        <p className={styles.valor_recebido_msg}>{valorRecebido}</p>
        <p className={styles.odds_msg}>{odds}</p>
      </div>
    </div>
  )
}

export default ResultadoPerfil;