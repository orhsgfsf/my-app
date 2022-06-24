import _ from 'lodash'
import React from 'react'
import { View, Text, Image } from 'react-native'
// styles
import { ListItemStyles } from '../styles'
// components
import { Button } from '../components/button'
// helpers
import { GetImageDomain } from '../helpers'
// icons
import { Foundation } from '@expo/vector-icons'
// theme
import { Scale, ThemeConst } from '../theme'

export const ListItem = (props) => {
    const {
        dateText,
        imagePath,
        title,
        popularity,
        date,
        onPressMoreDetails,
    } = props

    return (
        <View style={ListItemStyles.container}>
            {!_.isEmpty(imagePath)
                ? <Image source={{ uri: `${GetImageDomain()}${imagePath}` }} style={ListItemStyles.imageContainer} />
                : <View style={ListItemStyles.imageContainer}>
                    <Foundation name="prohibited" size={Scale(100)} color={ThemeConst.Color.black1} style={ListItemStyles.alignSelfCenter} />
                </View>
            }
            <View style={ListItemStyles.detailContainer}>
                <Text
                    numberOfLines={1}
                    style={ListItemStyles.titleText}
                >
                    {title}
                </Text>
                <Text style={ListItemStyles.introText}>{t('general.popularity', { popularity })}</Text>
                <Text style={ListItemStyles.introText}>{t(`general.${dateText}`, { date })}</Text>
                <Button
                    containerStyles={ListItemStyles.buttonContainer}
                    textStyles={ListItemStyles.buttonText}
                    text={t('general.moreDetails')}
                    onPress={onPressMoreDetails}
                />
            </View>
        </View>
    )
}