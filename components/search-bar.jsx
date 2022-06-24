import _ from 'lodash'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
// rn
import { View, TextInput } from 'react-native'
// styles
import { SearchBarStyles } from '../styles'
// icons
import { AntDesign } from '@expo/vector-icons'
// theme
import { Scale, ThemeConst } from '../theme'

export const SearchBar = forwardRef((props, ref) => {

    useImperativeHandle(
        ref,
        () => ({
            onGetTextValue() {
                return value
            },
        }),
    )

    const {
        searchBarRef,
        isNotYetFilled,
        containerStyles = {},
        textInputStyles = {},
        placeholder = '',
    } = props

    const [isSearchBarFocus, setIsSearchBarFocus] = useState(false)
    const [value, setValue] = useState('')

    const onChangeText = (text) => {
        setValue(text)
    }

    const onHandleBarFocus = (isToFocus) => {
        setIsSearchBarFocus(isToFocus)
    }

    return (
        <View style={[
            SearchBarStyles.container,
            containerStyles,
            isSearchBarFocus
                ? SearchBarStyles.containerFocused
                : {},
            isNotYetFilled
                ? SearchBarStyles.containerError
                : {},
        ]}>
            <AntDesign name="search1" size={Scale(20)} color={ThemeConst.Color.grey1} />
            <TextInput
                ref={searchBarRef}
                style={[SearchBarStyles.text, textInputStyles]}
                selectionColor={ThemeConst.Color.black1}
                multiline={false}
                numberOfLines={1}
                placeholder={placeholder}
                value={value}
                onFocus={() => onHandleBarFocus(true)}
                onBlur={() => onHandleBarFocus(false)}
                onChangeText={onChangeText}
            />
        </View>
    )
})
