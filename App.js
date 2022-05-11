import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import MealsNavigation from './navigation/MealsNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';

const fetchFonts = async () => {
	return await Font.loadAsync({});
};

function HomeScreen({Details}) {
	
	const onPressHandler=()=>{
		navigation.navigate('Details')
	}
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Pressable 
			onPress={onPressHandler}
			style={({pressed})=>({backgroundColor: pressed ? "#ddd" : "#452423"})}>
				<Text style={styles.text}>
					Go to screen Details
				</Text>
			</Pressable>
		</View>
	);
}
function DetailsScreen({navigation}) {
	const onPressHandler=()=>{
		navigation.navigate('Home')
	}
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Pressable 
			onPress={onPressHandler}
			style={({pressed})=>({backgroundColor: pressed ? "#ddd" : "#452423"})}>
				<Text style={styles.text}>
					Go to screen Home
				</Text>
			</Pressable>
		</View>
	);
}

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
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name='Home' component={Categories} />
				<Stack.Screen name='Details' component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
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
