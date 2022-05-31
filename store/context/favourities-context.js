import { Children, createContext, useState } from 'react';

export const FavouritesContext = createContext({
	id: [],
	addFavourites: (id) => {},
	removeFavourites: (id) => {},
});

function FavouritesContextProvider({ children }) {
	const [favouriteMealIds, setFavouriteMealIds] = useState([]);

	const addFavourites = (id) => {
		return setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
	};

	const removeFavourites = (id) => {
		return setFavouriteMealIds((currentFavIds) =>
			currentFavIds.filter((mealId) => mealId !== id)
		);
	};

	const value = {
		ids: favouriteMealIds,
		addFavourites: addFavourites,
		removeFavourites: removeFavourites,
	};

	return (
		<FavouritesContext.Provider value={value}>
			{children}
		</FavouritesContext.Provider>
	);
}

export default FavouritesContextProvider;
