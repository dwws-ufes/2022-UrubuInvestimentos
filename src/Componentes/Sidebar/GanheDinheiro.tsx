import styles from "./index.module.css";
import CONTENTS from '../../Content/Components/Sidebar.json'
import { setCadastro } from "../../store/pageInfoSlice";
import { selectLinguagem } from "../../store/pageInfoSlice";
import { useSelector, useDispatch } from "react-redux";
    
export const GanheDinheiro = () => {
    const dispatch = useDispatch();
    const Contents = CONTENTS[useSelector(selectLinguagem)];

    return(
        <div
            className={styles.ganhe_dinheiro}
            onClick={() => {
                dispatch(setCadastro(true));
            }}
        >
            <p>{ Contents.EarnMoney }</p>
            <div/>
        </div>
    );        
}
