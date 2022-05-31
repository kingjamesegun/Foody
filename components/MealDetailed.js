import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MealDetailed({duration, complexity, affordability, textStyle}) {
	return (
		<View style={styles.details}>
			<Text style={[styles.itemDetails, textStyle]}>{duration}</Text>
			<Text style={[styles.itemDetails ,textStyle]}>{complexity.toUpperCase()}</Text>
			<Text style={[styles.itemDetails, textStyle]}>{affordability}</Text>
		</View>
	);
}

export default MealDetailed;

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	itemDetails: {
		marginHorizontal: 8,
		fontSize: 14,
		color: '#000',
		textTransform: 'uppercase'
	}
});
