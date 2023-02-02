import { useClock } from "react-use-clock";
import { FaRegClock } from "react-icons/fa";

import styles from "./index.module.css";

interface propsType {
    transparente: boolean;
}

export const ProximoResultado = (props: propsType) => {
    const { transparente } = props;

    const clock = useClock();
    
    const classeDeFundo = transparente ? styles.fundo_transparente : styles.fundo_opaco;
    
    // Esse block de codigo inteiro serve pra processar quanto tempo falta pra meia noite
    let current_hour = clock.hours;
    let current_minutes = clock.minutes;

    let remaining_minutes = 60 - current_minutes;
    let remaining_hours = 0;
    if(remaining_minutes === 60) {
        remaining_hours = 24 - current_hour;
        remaining_minutes = 0;
    }
    else
        remaining_hours = 23 - current_hour;
    
    let resulting_remaining_time = (remaining_minutes !== 0) ? `${remaining_hours} h : ${remaining_minutes} min` : `${remaining_hours} h`;

    return(
        <div className={`${styles.proximo_resultado} ${classeDeFundo}`}>
            <FaRegClock className={styles.relogio}/>
            <p>Próximo resultado:</p>
            <p>{resulting_remaining_time}</p>
            <p></p>
        </div>
    );
}
