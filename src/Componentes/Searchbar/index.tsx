import { HiMagnifyingGlass } from "react-icons/hi2";

import styles from "./index.module.css";
import CONTENTS from "../../Content/Components/Searchbar.json"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLinguagem } from "../../store/pageInfoSlice";

export const Searchbar = () => {
    const Contents = CONTENTS[useSelector(selectLinguagem)];
    
    return(
        <div className={styles.search_bar}>
            <HiMagnifyingGlass className={styles.lupa}/>
            <form>
                <input
                    type="text"
                    placeholder={ Contents.Search }
                />
            </form>
        </div>
    );
}
