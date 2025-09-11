import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorite: (id) => {
          setFavoriteMealIds((currentIds) => [...currentIds, id]);
        },
        removeFavorite: (id) => {
          setFavoriteMealIds((currentIds) =>
            currentIds.filter((favId) => favId !== id)
          );
        },
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
