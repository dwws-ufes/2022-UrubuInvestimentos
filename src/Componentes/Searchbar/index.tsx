import React from "react";

interface propsType {

}

import "./index.css";

export const Searchbar = (props: propsType) => {
    return(
        <div id="search-bar">
            {/*<FontAwesomeIcon icon={faMagnifyingGlass}/> */}
            <p>Procure Jogos</p>
        </div>
    );
}
