import _ from 'lodash'
import React from 'react'
// rn
import { View, Text } from 'react-native'
// icons
import { AntDesign } from '@expo/vector-icons'
// styles
import { SearchButtonStyles } from '../styles'
// components
import { Button } from './button'
// theme
import { Scale, ThemeConst } from '../theme'

export const SearchButton = (props) => {

    const {
        containerStyle = {},
        innerContainerStyle = {},
        onPress,
    } = props

    return (
        <Button
            onPress={onPress}
            containerStyles={[SearchButtonStyles.container, containerStyle]}
            renderComponent={
                <View style={[SearchButtonStyles.innerContainer, innerContainerStyle]}>
                    <AntDesign name="search1" size={Scale(20)} color={ThemeConst.Color.white} />
                    <Text style={SearchButtonStyles.searchText}>{t('general.search')}</Text>
                </View>
            }
        />
    )
}
