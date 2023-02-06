import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from 'react-router-dom';

import CONTENTS from "../../Content/Components/Header.json"
import { selectLinguagem } from "../../store/pageInfoSlice";
import "./index.css";

interface propsType {
    sair: () => void;
}

export const Dropdown = (props: propsType) => {
        const { sair } = props;

        const Contents = CONTENTS[useSelector(selectLinguagem)];

        return(
            <div className="dropdown" >
                <Link className="link-dropdown l1" to="/perfil">{ Contents.Dropdown.Profile }</Link>
                <Link className=" link-dropdown l3" to="/">{ Contents.Dropdown.LogOut }</Link>
            </div>
        );
}
