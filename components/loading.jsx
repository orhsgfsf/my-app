import _ from 'lodash'
import React from 'react'
// rn
import { ActivityIndicator, View, Text } from 'react-native'
// styles
import { LoadingStyles } from '../styles'

export const Loading = (props) => {

    const {
        isLoadingDetails = false,
    } = props

    return (
        isLoadingDetails
            ? <View style={LoadingStyles.detailsContainer}>
                <Text style={LoadingStyles.loadingDetailsText}>{t('general.loading')}</Text>
                <View style={LoadingStyles.loadingDetailsIndicatorContainer}>
                <ActivityIndicator size={'large'} />
                </View>
            </View>
            : <View style={LoadingStyles.container}>
                <ActivityIndicator />
                <Text style={LoadingStyles.loadingText}>{t('general.loadingResults')}s</Text>
            </View>
    )
}
