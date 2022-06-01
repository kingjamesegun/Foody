import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/mealList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from '../store/context/favourities-context';

const Favourites = (props) => {
	const favouriteMealsCtx = useContext(FavouritesContext);

	const favouriteMeal = MEALS.filter((meal) =>
		favouriteMealsCtx.ids.includes(meal.id)
	);


    if(favouriteMeal.length === 0){
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>You have no favourite meal yet</Text>
            </View>
        )
    }
	return <MealsList items={favouriteMeal} />;
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
    text:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default Favourites;
