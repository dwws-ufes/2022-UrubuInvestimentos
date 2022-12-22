import { HiMagnifyingGlass } from "react-icons/hi2";

import "./index.css";

export const Searchbar = () => {
    return(
        <div className="search-bar">
            <HiMagnifyingGlass className="lupa"/>
            <p>Procure jogos passados</p>
        </div>
    );
}
