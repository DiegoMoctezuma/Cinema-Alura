import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritosProvider from "context/Favoritos";

import Favoritos from "pages/Favoritos/Fovoritos";
import Inicio from "pages/Inicio";
import Player from "pages/Player/Player";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Container from "components/Container/Container";
import NotFound from "pages/NotFound/NotFound";


function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio/>}></Route>
                        <Route path="/favoritos" element={<Favoritos/>}></Route>
                        <Route path="/:id" element={<Player/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;