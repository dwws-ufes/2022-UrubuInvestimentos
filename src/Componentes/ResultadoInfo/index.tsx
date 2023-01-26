import "./index.css";

interface propsType {
    animal: string;
    milhares: string[] | number[];
}

export const ResultadoInfo = (props: propsType) => {
    const { animal, milhares } = props;

    return(
        <div className="resultado-info">
            <p className="ultimo-jogo">ÚLTIMO RESULTADO</p>
            <h3 className="animal">{animal.toUpperCase()}!</h3>
            
            <div className="numeros">
                {milhares.map((milhar, index) => 
                    <p
                        key={index}
                        className="milhar"
                    >
                        {milhar}
                    </p>
                )}
            </div>
        </div>
    );
}
