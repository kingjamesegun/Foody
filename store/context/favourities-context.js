import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
	ids: [],
	addFavourites: (id) => {},
	removeFavourites: (id) => {},
});

function FavouritesContextProvider({ children }) {
	const [favouriteMealIds, setFavouriteMealIds] = useState([]);

	const addFavourites = (id) => {
		setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
	};

	const removeFavourites = (id) => {
		 setFavouriteMealIds((currentFavIds) =>
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
