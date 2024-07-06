import Titulo from 'components/Titulo/Titulo';
import styles from './NotFound.module.css';
import img404 from './404_blank.png'

function NotFound() {
    return (
        <img src={img404} className={styles.img} />
    )
}

export default NotFound;