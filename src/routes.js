import { BrowserRouter, Routes, Route } from "react-router-dom";

import Favoritos from "pages/Favoritos/Fovoritos";
import Inicio from "pages/Inicio";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Container from "components/Container/Container";
import FavoritosProvider from "context/Favoritos";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path="/favoritos" element={<Favoritos/>}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;