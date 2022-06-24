import _ from 'lodash'
import React from 'react'
// rn
import { Text, TouchableOpacity } from 'react-native'

export const Button = (props) => {

    const {
        containerStyles = {},
        textStyles = {},
        activeOpacity = 0.2,
        text = '',
        renderComponent = null,
        onPress,
    } = props

    return (
        <TouchableOpacity
            style={containerStyles}
            activeOpacity={activeOpacity}
            onPress={onPress}
        >
            {
                !_.isEmpty(text)
                    ? <Text style={textStyles}>{text}</Text>
                    : renderComponent
            }
        </TouchableOpacity>
    )
}
