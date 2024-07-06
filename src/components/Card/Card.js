import styles from './Card.module.css';
import iconFavorito from './iconFavorito.png';

function Card({id,capa,titulo}){
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <div className={styles.infoContainer}>
                <h2 className={styles.titulo}>{titulo}</h2>
                <img className={styles.icon} src={iconFavorito} alt='Icono favorito'/>
            </div>
        </div>
    )
}

export default Card;