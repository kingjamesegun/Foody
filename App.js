import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// SCREENS
import Categories from './screens/Categories';
import MealDetails from './screens/MealOverview';
import MealItems from './screens/MealItems';
import Favourites from './screens/Favourites';
import { Ionicons } from '@expo/vector-icons';
import FavouritesContextProvider from "./store/context/favourities-context";

const fetchFonts = async () => {
	return await Font.loadAsync({});
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
	// Nexted Navigation
	const DrawerNavigation = () => {
		return (
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#351401' },
					headerTintColor: 'white',
					sceneContainerStyle: { backgroundColor: '#3f2f25' },
				}}
			>
				<Drawer.Screen
					name='Categories'
					component={Categories}
					options={{
						title: 'Daily Categories',
						drawerIcon: ({ size, color }) => {
							<Ionicons name='list' color={color} size={size} />;
						},
					}}
				/>
				<Drawer.Screen
					name='Favourites Screen'
					component={Favourites}
					options={{
						drawerIcon: ({ size, color }) => {
							<Ionicons name='star' size={24} color={color} />;
						},
					}}
				/>
			</Drawer.Navigator>
		);
	};

	return (
		<>
			<StatusBar style='light' />
			{/* context is added here inorder to have  for the meal items and favorites screen to have access to it */}
			<FavouritesContextProvider>
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
							component={DrawerNavigation}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen name='Meal Details' component={MealDetails} />
						<Stack.Screen name='Individual Details' component={MealItems} />
					</Stack.Navigator>
				</NavigationContainer>
			</FavouritesContextProvider>
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
