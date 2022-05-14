import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const Categories = ({ navigation }) => {
	const renderCategoryItem = (itemData) => {
		const onPressHandler = () => {
			navigation.navigate('Meal Details', {
				categoryId: itemData.item.id,
			});
		};

		
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={onPressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.d}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};

{
	/* <View style={styles.screen}>
				<Text>The Categories Screen!</Text>
				<Button
					title='Go to Categories Meal'
					onPress={() => {
						props.navigation.navigate();
					}}
				/>
			</View> */
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Categories;
