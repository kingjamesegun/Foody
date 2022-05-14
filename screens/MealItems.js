import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MealDetailed from '../components/MealDetailed';
import { MEALS } from '../data/dummy-data';

const CategoryMeal = ({ route }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Image source={{ uri: selectedMeal.imageUrl }} />
			<Text>{selectedMeal.title}</Text>
			<MealDetailed
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordabilitys}
			/>
			<Text>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<Text key={ingredient}>{ingredient}</Text>
			))}
			<Text>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<Text key={step}>{step}</Text>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default CategoryMeal;
