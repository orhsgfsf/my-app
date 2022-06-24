import _ from 'lodash'
import React from 'react'
// rn
import { View, Text } from 'react-native'
// icons
import { AntDesign } from '@expo/vector-icons'
// components
import { Button } from './button'
// styles
import { CategoryBlockStyles } from '../styles'
// theme
import { Scale, ThemeConst } from '../theme'

export const CategoryBlock = (props) => {
    const {
        isSelected = false,
        containerStyle = {},
        innerContainerStyle = {},
        categoryName = '',
        onPress,
    } = props

    return (
        <Button
            onPress={onPress}
            containerStyles={[
                CategoryBlockStyles.container,
                containerStyle,
                isSelected
                    ? CategoryBlockStyles.containerSelected
                    : {}
            ]}
            renderComponent={
                <View style={[CategoryBlockStyles.innerContainer, innerContainerStyle]}>
                    <Text style={[
                        CategoryBlockStyles.categoryNameText,
                        isSelected
                            ? CategoryBlockStyles.categoryNameTextSelected
                            : {}
                    ]}>
                        {categoryName}
                    </Text>
                    {
                        isSelected
                            ? <View style={CategoryBlockStyles.iconCheckContainer}>
                                <AntDesign name="check" size={Scale(20)} color={ThemeConst.Color.white} />
                            </View>
                            : null
                    }
                </View>
            }
        />
    )
}
