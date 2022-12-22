import { useNavigate } from "react-router-dom";

import "./index.css";

export const Logo = () => {
    const navigate = useNavigate();

    return(
        <div
            className="logo"
            onClick={() => navigate("/")}
        >
            <img src="imagens/urubuzado.svg"
                alt="logo urubu"
                className="urubu-svg"
            />
            <h2 className="nome-empresa">Urubu Investimentos</h2>
        </div>
    );
}
