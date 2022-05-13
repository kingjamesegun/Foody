import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
} from 'react-native';
import React from 'react';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={onPress}
			>
				<View>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.itemDetails}>{duration}</Text>
					<Text style={styles.itemDetails}>{complexity.toUpperCase()}</Text>
					<Text style={styles.itemDetails}>{affordability.toUpperCase()}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 10,
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	image: {
		width: '100%',
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		paddingVertical: 8,
	},
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
	buttonPressed: {
		opacity: 0.35,
	},
});
