import { Outlet } from "react-router-dom";
import Container from "components/Container/Container";
import Header from "components/Header/Header";
import FavoritosProvider from "context/Favoritos";
import Footer from "components/Footer/Footer";

function PaginaBase(){
    return(
        <main>
            <Header/>
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase;