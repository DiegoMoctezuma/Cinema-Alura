import styles from './Footer.module.css';
import logo from '../Header/logo-alura.png';

function Footer(){
    return(
        <footer className={styles.footer}>
            <span>Desarrollado por </span>
            <img src={logo}/>
        </footer>
    )
}

export default Footer;