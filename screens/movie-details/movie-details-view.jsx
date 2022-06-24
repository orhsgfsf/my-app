import _ from 'lodash'
import React from 'react'
// rn
import { View, Text, Image, ScrollView } from 'react-native'
// styles
import { MovieDetailsStyles } from '../../styles'
// components
import { Loading } from '../../components'
// helpers
import { GetImageDomain } from '../../helpers'
// icons
import { Foundation } from '@expo/vector-icons'
// theme
import { Scale, ThemeConst } from '../../theme'

export const MovieDetailsView = (props) => {
    const {
        isLoading,
        data,
    } = props

    return (
        isLoading
            ? <View style={MovieDetailsStyles.loadingContainer}>
                <Loading isLoadingDetails />
            </View>
            : <ScrollView showsVerticalScrollIndicator={false}>
                <View style={MovieDetailsStyles.container}>
                    <Text style={MovieDetailsStyles.titleText}>{data.title}</Text>
                    {
                        !_.isEmpty(data.imagePath)
                            ? <Image
                                source={{ uri: `${GetImageDomain()}${data.imagePath}` }}
                                style={MovieDetailsStyles.imageContainer}
                            />
                            : <Foundation
                                name="prohibited"
                                size={Scale(360)}
                                color={ThemeConst.Color.black1}
                                style={MovieDetailsStyles.alignSelfCenter}
                            />
                    }
                    <Text style={MovieDetailsStyles.overviewText}>{data.overview}</Text>
                    <View style={[
                        MovieDetailsStyles.popularityAndDateContainer,
                        (_.isEmpty(data.overview) || _.isEmpty(data.date))
                            ? MovieDetailsStyles.alignSelfCenter
                            : {}
                    ]}>
                        <Text style={MovieDetailsStyles.popularityAndDateText}>{t('general.popularity', { popularity: data.popularity })}</Text>
                        {
                            !_.isEmpty(data.date)
                                ? <Text style={MovieDetailsStyles.popularityAndDateText}> | {t(`general.${data.dateText}`, { date: data.date })}</Text>
                                : null
                        }
                    </View>
                </View>
            </ScrollView>
    )
}