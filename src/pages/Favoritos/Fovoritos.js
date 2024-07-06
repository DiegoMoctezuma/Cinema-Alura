import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo/Titulo';
import Banner from 'components/Banner/Banner';

function Favoritos() {
    return(
        <>
            <Banner color="#00BF63" img="favoritos"/>
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
        </>
    )
}

export default Favoritos;   