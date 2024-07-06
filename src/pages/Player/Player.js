import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import videos from 'data/db.json';

import Banner from 'components/Banner/Banner';
import Titulo from 'components/Titulo/Titulo';
import NotFound from 'pages/NotFound/NotFound';

function Player() {

    const parametros = useParams();
    const video = videos.find(video => video.id === Number(parametros.id));

    return(
        !video ? <NotFound/> : 
        <>
            <Banner img="player" color="#BF008A"/>
            <div className={styles.playerContainer}>
                <Titulo>
                    <h1>Player</h1>
                </Titulo>   
                <section className={styles.container}>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={video.link}
                        title={video.titulo} 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </section>
            </div>
        </>
    )
}

export default Player;