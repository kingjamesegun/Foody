import React, { useLayoutEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
} from 'react-native';
import IconButton from '../components/IconButton';
import MealDetailed from '../components/MealDetailed';
import List from '../components/MealDetailed/List';
import { MEALS } from '../data/dummy-data';

const CategoryMeal = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	const headerButtonHandler = () => {
		console.log('Pressed');
	};

	// Used to configure options for the screen
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton icon='star' color='white' onPress={headerButtonHandler} />
				);
			},
		});
	}, [navigation, headerButtonHandler]);

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetailed
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.textStyle}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Text style={styles.subtitle}>Ingredients</Text>
					<List data={selectedMeal.ingredients} />

					<Text style={styles.subtitle}>Steps</Text>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};




const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	textStyle: {
		color: 'white',
	},
	subtitle: {
		color: '#e2b497',
		fontSize: 18,
		fontWeight: 'bold',
		paddingVertical: 6,
		borderBottomColor: '#e2b497',
		borderBottomWidth: 2,
		marginHorizontal: 12,
		marginVertical: 2,
		textAlign: 'center',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '80%',
	},
});



export default CategoryMeal;
