import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({children}){

    const [favoritos, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext(){
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito){
        const favoritoRepetido = favoritos.some(item => item.id === nuevoFavorito.id);
        let listaNueva = [...favoritos];
        if(!favoritoRepetido){
            listaNueva.push(nuevoFavorito);
            return setFavoritos(listaNueva);
        }
        listaNueva = favoritos.filter(item => item.id !== nuevoFavorito.id);
        return setFavoritos(listaNueva);
    }
    return {favoritos, agregarFavorito};
}