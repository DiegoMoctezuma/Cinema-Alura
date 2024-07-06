import { useFavoritosContext } from 'context/Favoritos';
import styles from './Favoritos.module.css';
import imgNotFav from './Asset 1@3x.png';

import Titulo from 'components/Titulo/Titulo';
import Banner from 'components/Banner/Banner';
import Card from 'components/Card/Card';

function Favoritos() {

    const {favoritos} = useFavoritosContext();

    return(
        <>
            <Banner color="#00BF63" img="favoritos"/>
            <div className={styles.favContainer}>
                
                {favoritos.length === 0 ? 
                    <div>
                        <Titulo>
                            <h1>No hay favoritos</h1>
                        </Titulo>
                        <img className={styles.img} src={imgNotFav}/>
                    </div>
                :
                    <div>
                        <Titulo>
                            <h1>Favoritos</h1>
                        </Titulo>
                        <section className={styles.container}>
                        {favoritos.map(fav => {
                            return <Card {...fav} key={fav.id} />
                        })}
                        </section>
                    </div>
                }
            </div>
        </>
    )
}

export default Favoritos;   