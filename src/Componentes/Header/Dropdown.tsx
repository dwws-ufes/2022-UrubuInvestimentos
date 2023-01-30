import React from "react";
import { Link } from 'react-router-dom';

import Content from "../../Content/Components/Header.json"
import "./index.css";

interface propsType {
    sair: () => void;
}

export const Dropdown = (props: propsType) => {
        const { sair } = props;

        return(
            <div className="dropdown" >
                <Link className="link-dropdown l1" to="/perfil">{ Content.Dropdown.Profile }</Link>
                <Link className=" link-dropdown l3" to="/">{ Content.Dropdown.LogOut }</Link>
            </div>
        );
}
