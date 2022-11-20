import React from "react";


import "./index.css";

interface propsType {

}

export const Searchbar = (props: propsType) => {
    return(
        <div className="search-bar">
            {/*<FontAwesomeIcon icon={faMagnifyingGlass}/> */}
            <p>Procure Jogos</p>
        </div>
    );
}
