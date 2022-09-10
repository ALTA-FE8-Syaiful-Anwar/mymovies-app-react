import React, { createContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ Children }) {
    const [favMovies, setFavMovies] = useState([]);

    const addToFavorite = (title, src) => {
        setFavMovies((prevState) => [...prevState, { title, src }]);
    };
    return (
        <FavoriteContext.Provider
            value={{
                favMovies, addToFavorite
            }}
        >
            {Children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteContext;