import React from "react";
import { Link } from 'react-router-dom';

import CONTENTS from "../../Content/Components/Header.json"
import "./index.css";

interface propsType {
    sair: () => void;
}

const Contents = CONTENTS["pt-Br"];

export const Dropdown = (props: propsType) => {
        const { sair } = props;

        return(
            <div className="dropdown" >
                <Link className="link-dropdown l1" to="/perfil">{ Contents.Dropdown.Profile }</Link>
                <Link className=" link-dropdown l3" to="/">{ Contents.Dropdown.LogOut }</Link>
            </div>
        );
}
