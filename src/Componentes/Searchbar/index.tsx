import { HiMagnifyingGlass } from "react-icons/hi2";

import styles from "./index.module.css";

export const Searchbar = () => {
    return(
        <div className={styles.search_bar}>
            <HiMagnifyingGlass className={styles.lupa}/>
            <form>
                <input
                    type="text"
                    placeholder="Procure jogos passados"
                />
            </form>
        </div>
    );
}
