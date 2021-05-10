import { Link } from "react-router-dom";
import dummy from "../db/albumdata.json";
import styles from "./Album.module.css";

export default function Album(){
    return(
        <ul id={styles.AlbumList}>               
            {dummy.album.map(al=>(
                <li>
                    <Link to={`/music/${al.num}`}>
                        <p className={styles.imgs}><img src={al.poster} alt="album"/></p>
                        <p className={styles.numbers}>{al.num}</p>
                        <div className={styles.albumdesc}>
                            <p className={styles.titles}>{al.title}</p>
                            <p>{al.name}</p>
                            <p>{al.al_date}&nbsp;<span>|</span>&nbsp;{al.al}</p>
                        </div>
                    </Link>                  
                </li>
            ))}
        </ul>
    )
}