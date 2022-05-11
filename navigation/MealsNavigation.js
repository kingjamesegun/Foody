import { createAppContainer } from "react-navigation";
import {createStackNavigation} from 'react-navigation-stack';
import CategoriesScreen from '../screens/Categories';
import CategoryScreen from '../screens/CategoryMeals';
import MealDetailsScreen from '../screens/MealDetails';


const MealNavigator = createStackNavigation({
    // shorter form 
    Categories: CategoriesScreen,
    // longer form
    CategoryMeal: {
        screen: CategoryScreen
    },
    MealDetail: MealDetailsScreen
});


export default createAppContainer(MealNavigator);