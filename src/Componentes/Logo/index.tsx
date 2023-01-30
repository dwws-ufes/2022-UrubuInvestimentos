import { useNavigate } from "react-router-dom";

import Content from "../../Content/Components/Logo.json"
import "./index.css";

export const Logo = () => {
    const navigate = useNavigate();

    return(
        <div
            className="logo"
            onClick={() => navigate("/")}
        >
            <img src="imagens/urubuzado.svg"
                alt={ Content.Alternative }
                className="urubu-svg"
            />
            <h2 className="nome-empresa">{ Content.Name }</h2>
        </div>
    );
}
