import { FaRegClock } from "react-icons/fa";

import "./index.css";

export const ProximoResultado = () => {
    return(
        <div className="proximo-resultado">
            <FaRegClock className="relogio"/>
            <p>Próximo resultado:</p>
            <p>2h:10min</p>
            <p></p>
        </div>
    );
}
