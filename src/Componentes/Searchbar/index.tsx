import React from "react";

import { HiMagnifyingGlass } from "react-icons/hi2";

import "./index.css";

interface propsType {

}

export const Searchbar = (props: propsType) => {
    return(
        <div className="search-bar">
            <HiMagnifyingGlass className="lupa"/>
            <p>Procure jogos passados</p>
        </div>
    );
}
