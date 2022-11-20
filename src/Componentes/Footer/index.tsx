import React from "react";

import "./index.css";

interface propsType {

}

export const Footer = (props: propsType) => {
    return(
        <footer>
            <div id="footer-container">
                <div id="redes-sociais">
                    <div id="logo-composto-footer">
                        <img src="/images/urubuzado.svg" alt="urubu do pix logo" id="logo-footer"/>
                        <p>Urubu Investimentos</p>
                    </div>
                    <div id="redes-sociais-icones">
                        {/*<FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faTwitter}/>*/}
                    </div>
                </div>

                <div className="links-uteis-sobre-nos">
                    <h3>LINKS ÚTEIS</h3>
                    <p><a href="#">lorem</a></p>
                    <p><a href="#">lorem</a></p>
                    <p><a href="#">lorem</a></p>
                </div>

                <div className="links-uteis-sobre-nos">
                    <h3>SOBRE NÓS</h3>
                    <p><a href="#">lorem</a></p>
                    <p><a href="#">lorem</a></p>
                    <p><a href="#">lorem</a></p>
                </div>
            </div>            
        </footer>
    );
}
