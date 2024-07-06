import { useFavoritosContext } from 'context/Favoritos';
import styles from './Card.module.css';
import iconFavorito from './iconFavorito.png';
import iconNoFavorito from './iconNoFavorito.png';
import { Link } from 'react-router-dom';

function Card({id,capa,titulo}){

    const {favoritos, agregarFavorito} = useFavoritosContext();
    const esFavorito = favoritos.some(fav => fav.id === id);
    const icon = esFavorito ? iconFavorito : iconNoFavorito;

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}/>
            </Link>
            <div className={styles.infoContainer}>
                <Link className={styles.link} to={`/${id}`}>
                    <h2 className={styles.titulo}>{titulo}</h2>
                </Link>
                <img 
                    onClick={() => agregarFavorito({id, capa, titulo})}
                    className={styles.icon} 
                    src={icon} 
                    alt='Icono favorito'
                />
            </div>
        </div>
    )
}

export default Card;