import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MealDetailed from "../MealDetailed";

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	const handleMealItemPress = () => {
		// setting the params here
		navigation.navigate('Individual Details', {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={handleMealItemPress}
			>
				<View>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<MealDetailed duration={duration} complexity={complexity} affordability={affordability}/>
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
	buttonPressed: {
		opacity: 0.35,
	},
});