import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MealDetailed({duration, complexity, affordability}) {
	return (
		<View style={styles.details}>
			<Text style={styles.itemDetails}>{duration}</Text>
			<Text style={styles.itemDetails}>{complexity.toUpperCase()}</Text>
			<Text style={styles.itemDetails}>{affordability}</Text>
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
		color: '#ccdcdc',
	},
});
