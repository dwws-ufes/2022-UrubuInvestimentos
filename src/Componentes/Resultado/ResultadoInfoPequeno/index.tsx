import { processaData } from "../../../Utils/processaData";

import styles from "./index.module.css";

interface propsType {
  dia: string;
  animal: string;
  milhares: string[] | number[]
}

export const ResultadoInfoPequeno = (props: propsType) => {
  const { dia, animal, milhares } = props;

  const diaProcessado = processaData(dia);

  return (
    <div className={styles.resultado_info}>
      <p className={styles.dia}>{diaProcessado}</p>
      <h4 className={styles.animal}>{animal}</h4>

      <div className={styles.numeros}>
        {milhares.map((milhar, index) =>
          <p
            key={index}
            className={styles.milhar}
          >
            {milhar}
          </p>
        )}
      </div>
    </div>
  );
}
