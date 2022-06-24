import React from 'react'
// stack
import { createStackNavigator } from '@react-navigation/stack'
// screen
import { MoviesApp, MovieDetails } from '../screens'
// components
import { ScreenHeader } from '../components'

const Stack = createStackNavigator()

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="MoviesApp">
            <Stack.Screen name="MoviesApp" component={MoviesApp} options={ScreenHeader} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} options={ScreenHeader} />
        </Stack.Navigator>
    )
}
