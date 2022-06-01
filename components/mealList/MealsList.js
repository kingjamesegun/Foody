import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

import MealItem from "./MealItem";

const MealsList = ({items}) => {
	const renderMealItem = ({ item }) => {
		const mealProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			complexity: item.complexity,
			duration: item.duration,
		};
		return <MealItem {...mealProps} />;
	};

	return (
		<View style={styles.screen}>
			<FlatList
				data={items}
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

export default MealsList;
