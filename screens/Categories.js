import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Categories = (props) => {
    console.log(props)
	return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
            <Button title="Go to Categories Meal" onPress={()=>{
                props.navigation.navigate()
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Categories;
