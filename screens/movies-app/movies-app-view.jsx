import React from 'react'
// rn
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// tab screens
import { MoviesHome, MoviesSearchResults } from '../tab-screens'
// styles
import { MoviesAppStyles } from '../../styles'
// theme
import { ThemeConst } from '../../theme'

const Tab = createMaterialTopTabNavigator()

export const MoviesAppView = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                lazy: true,
                tabBarStyle: MoviesAppStyles.tabBarContainer,
                tabBarLabelStyle: MoviesAppStyles.tabBarLabel,
                tabBarIndicatorStyle: MoviesAppStyles.tabBarIndicator,
                tabBarActiveTintColor: ThemeConst.Color.darkNavyBlue2,
            }}
        >
            <Tab.Screen name="Movie" component={MoviesHome} options={{ title: t('general.movie'), }} />
            <Tab.Screen name="SearchResults" component={MoviesSearchResults} options={{ title: t('general.searchResults') }} />
            <Tab.Screen name="TV" component={MoviesHome} options={{ title: t('general.tv') }} />
        </Tab.Navigator>
    )
}
