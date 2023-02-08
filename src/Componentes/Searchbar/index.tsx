import { HiMagnifyingGlass } from "react-icons/hi2";

import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../store/pageInfoSlice";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/Searchbar.json"
import { selectLinguagem } from "../../store/pageInfoSlice";

export const Searchbar = () => {
    const dispatch = useDispatch();
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
    return(
            <form
                className={styles.search_bar}
                >
                <HiMagnifyingGlass className={styles.lupa}/>
                <input
                    type="text"
                    placeholder={ Contents.Search }
                    onChange={e => {
                        dispatch(setSearch(e.target.value));
                    }}
                />
            </form>
    );
}
