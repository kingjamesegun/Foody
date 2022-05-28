import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// SCREENS
import Categories from './screens/Categories';
import MealDetails from './screens/MealOverview';
import MealItems from './screens/MealItems';
import { Button } from 'react-native-web';

const fetchFonts = async () => {
	return await Font.loadAsync({});
};

const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
		'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
		'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return (
			<AppLoading
			// startAsync={fetchFonts}
			// onFinish={()=> setFontLoaded(true)}
			// onError={(err)=> console.log(err)}
			/>
		);
	}
	// <MealsNavigation/>

	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Daily Categories'
					screenOptions={{
						headerStyle: { backgroundColor: '#351401' },
						headerTintColor: 'white',
						contentStyle: {
							backgroundColor: '#3f2f25',
						},
					}}
				>
					<Stack.Screen
						name='Daily Categories'
						component={Categories}
						options={{
							title: 'All Categoris',
						}}
					/>
					<Stack.Screen name='Meal Details' component={MealDetails} />
					<Stack.Screen name='Individual Details' component={MealItems} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
