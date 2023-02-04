import { useDispatch } from "react-redux";
import styles from "./index.module.css";
import { setCadastro } from "../../store/pageInfoSlice";

export const GanheDinheiro = () => {
    const dispatch = useDispatch();
    
    return(
        <div
            className={styles.ganhe_dinheiro}
            onClick={() => {
                dispatch(setCadastro(true));
            }}
        >
            <p>Ganhe $ grátis agora!</p>
            <div/>
        </div>
    );        
}
