import React from "react";

import "./index.css";

interface propsType {
    dia: string;
    animal: string;
    milhares: string[] | number[]
}

export const ResultadoInfoPequeno = (props: propsType) => {
    const { dia, animal, milhares } = props;

    return(
        <div className="resultado-info-pequeno">
            <p className="dia">{dia}</p>
            <h4 className="animal">{animal}</h4>

            {milhares.map((milhar, index) =>
                <p
                    key="index"
                    className="milhar"
                >
                    {milhar}
                </p>
            )}
        </div>
    );
}
