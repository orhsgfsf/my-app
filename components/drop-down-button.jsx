import _ from 'lodash'
import React from 'react'
// rn
import { View, Text } from 'react-native'
// icons
import { AntDesign } from '@expo/vector-icons'
// styles
import { DropDownButtonStyles } from '../styles'
// components
import { Button } from './button'
// theme
import { Scale, ThemeConst } from '../theme'

export const DropDownButton = (props) => {

    const {
        isNotYetFilled = false,
        containerStyle = {},
        categoryName,
        onPress,
    } = props

    return (
        <Button
            onPress={onPress}
            activeOpacity={1}
            renderComponent={
                <View style={[
                    DropDownButtonStyles.container,
                    containerStyle,
                    isNotYetFilled
                        ? DropDownButtonStyles.errorContainer
                        : {}
                ]}>
                    <Text style={DropDownButtonStyles.categoryNameText}>{categoryName}</Text>
                    <AntDesign name="down" size={Scale(16)} color={ThemeConst.Color.grey1} />
                </View>
            }
        />
    )
}
