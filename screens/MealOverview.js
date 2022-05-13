import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealDetails = ({ route, navigation }) => {
	const catId = route.params.categoryId;
	const displayedMeal = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	const categoryTitle = CATEGORIES.find(
		(category) => category.id === catId
	).title;

	navigation.setOptions({
		title: categoryTitle,
	});
	const handleMealItemPress = () => {};

	
	const renderMealItem = ({ item }) => {
		const mealProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
			onPress: handleMealItemPress,
		};
		return <MealItem {...mealProps} />;
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeal}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 16,
	},
});
export default MealDetails;
