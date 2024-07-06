import { Link } from "react-router-dom";
import HeaderLink from "components/HeaderLink/HeaderLink";
import styles from "./Header.module.css";
import logo from "./logo-alura.png";

function Header(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo alura"/>
                    <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <HeaderLink url="/">Home</HeaderLink>
                <HeaderLink url="/favoritos">Favoritos</HeaderLink>
            </nav>
        </header>
    )
}

export default Header;