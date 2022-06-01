import React from 'react';
import MealsList from "../components/mealList/MealsList";
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

	return <MealsList items={displayedMeal}/>


};


export default MealDetails;
