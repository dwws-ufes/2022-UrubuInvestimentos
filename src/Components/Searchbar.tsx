import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


interface propsType {

}

export const Searchbar = (props: propsType) => {
    return(
        <div id="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <p>Procure Jogos</p>
        </div>
    );
}