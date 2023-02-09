import { HiMagnifyingGlass } from "react-icons/hi2";

import { useSelector, useDispatch } from "react-redux";
import { loga, desloga, selectLogin, selectDropdown, selectEntrar, selectCadastro, selectSidebar, setSearch } from "../../store/pageInfoSlice";
import { selectNomeUsuario, selectSaldo } from "../../store/userInfoSlice";

import styles from "./index.module.css";

interface propsType {
    placeholder: string;
}

export const Searchbar = (props: propsType) => {
    const { placeholder } = props;

    const dispatch = useDispatch();
    
    return(
            <form
                className={styles.search_bar}
                >
                <HiMagnifyingGlass className={styles.lupa}/>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={e => {
                        dispatch(setSearch(e.target.value));
                    }}
                />
            </form>
        
    );
}
