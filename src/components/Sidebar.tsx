import React from "react";

import { BotaoGenerico } from "./BotaoGenerico"

interface propsType {

}

export const Sidebar = (props: propsType) => {
    return(
        <div id="sidebar">
            <div id="parceiro-oficial">
                <p>Parceiro Oficial</p>
                <img src="/images/flamengo-logo-2020.svg" alt="Logo do Flamengo" />
            </div>

            <BotaoGenerico text="💵 Ganhe $ Grátis" href="#"/>
        </div>
    );
}