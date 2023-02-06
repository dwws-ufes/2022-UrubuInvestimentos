import { Link } from "react-router-dom";

import { GanheDinheiro } from './GanheDinheiro';

import styles from './index.module.css';
import CONTENTS from '../../Content/Components/Sidebar.json'
import { selectLinguagem } from "../../store/pageInfoSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Sidebar = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
    return(
        <div className={styles.sidebar}>
            <div className={styles.parte_superior}>
                <a
                    className={styles.parceiro_oficial}
                    href="https://www.flamengo.com.br/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>{ Contents.Sponsors.Title }</p>
                    { Contents.Sponsors.Infos.map((element, index) => {
                        return (<img src={ element.src } alt={ element.alt } key={index} />)
                    })}
                </a>
                
                <GanheDinheiro />
                
                <button className={styles.investir_agora}>{ Contents.DoInvestment }</button>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <Link
                            className={styles.redirect}
                            to="/zumzumcapoeira"
                        >
                            { Contents.Friend }
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.redirect}
                            to="/regras"
                        >
                           { Contents.Rules }
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.redirect}
                            to="/suporte"
                        >
                            { Contents.Help }
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
