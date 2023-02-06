import styles from "./index.module.css";
import CONTENTS from '../../Content/Components/Sidebar.json'
import { selectLinguagem } from "../../store/pageInfoSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const GanheDinheiro = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div
            className={styles.ganhe_dinheiro}
        >
            <p>{ Contents.EarnMoney }</p>
            <div/>
        </div>
    );        
}
