import { useParams } from "react-router";
import { Link } from "react-router-dom";
import dummy from "../db/albumdata.json";
import styles from "./Music.module.css";

export default function Music(){
    const {num} = useParams();
    const AlbumList = dummy.album.filter(al=>al.num === Number(num));    

    function musicS(){  
        var audio = document.getElementById('audio');
        if (audio.paused) {
            audio.play();
        }else{
            audio.pause();
            audio.currentTime = 0
        }      
    }
    
    return (
        <div>
            {AlbumList.map(al=>(
                <div ket={al.num}>
                    <h2>{al.title}</h2>
                    <hr/>
                    <div className={styles.MusicArea}>
                        <p className={styles.imgs}><img src={al.poster} alt="album"/></p>
                        <div>
                            <dl className={styles.AlbumDesc}>
                                <dt>아티스트</dt>
                                <dd>{al.name}</dd>
                                <dt>앨범 종류</dt>
                                <dd>{al.al}</dd>
                                <dt>발매일</dt>
                                <dd>{al.al_date}</dd>
                            </dl>
                        </div>
                    </div>                    
                </div>
            ))}
            <hr/>
                <h3>수록곡</h3>
                <div>
                    <table className={styles.MusicDesc} title="수록곡">
                        <caption>수록곡</caption>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>곡</th>
                                <th>아티스트</th>
                                <th>듣기</th>
                            </tr>
                        </thead>
                {dummy.music.map(mu=>(
                    <tbody>
                        <tr>
                            <td>{mu.num}</td>
                            <td>{mu.title}</td>
                            <td>{mu.name}</td>
                            <td>
                                <button onClick={musicS}>▶</button>
                                <audio id="audio" src='https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori'></audio>
                            </td>
                        </tr>
                    </tbody>                                                   
                ))} 
                    </table>
                </div>
            <Link to="/">뒤로가기</Link>               
        </div>        
    )
}