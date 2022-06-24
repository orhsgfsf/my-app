import _ from 'lodash'
import React, { useEffect, useState } from 'react'
// rn
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
// view
import { MovieDetailsView } from './movie-details-view'
// api
import { GetDetails } from '../../api'
// helpers
import { Dictionary } from '../../helpers'

export const MovieDetailsController = () => {

    const { params: { category, id } } = useRoute()
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({})

    const getDetails = async () => {
        try {
            const { data } = await GetDetails(category, id)
            const resolvedData = {
                title: !_.isEmpty(data.title)
                    ? data.title
                    : data.name,
                overview: data.overview,
                // Danny: I think those paths are 3 of the most common path to have, maybe there are other image paths from backend.
                imagePath: !_.isEmpty(data.backdropPath)
                    ? data.backdropPath
                    : !_.isEmpty(data.posterPath)
                        ? data.posterPath
                        : data.profilePath,
                popularity: data.popularity,
                date: !_.isEmpty(data[Dictionary('date')[category]])
                    ? data[Dictionary('date')[category]]
                    : '',
                dateText: !_.isEmpty(Dictionary('date')[category])
                    ? Dictionary('date')[category]
                    : '',
            }
            setData(resolvedData)
            navigation.setOptions({
                headerTitle: resolvedData.title,
            })
        } catch (e) {
            Alert.alert(
                'Error',
                e.message,
                [{
                    text: 'OK',
                    onPress: () => navigation.goBack(),
                }],
            )
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isLoading) {
            getDetails()
        }
    }, [isLoading])

    const ViewProps = {
        isLoading,
        category,
        data,
    }

    return <MovieDetailsView {...ViewProps} />
}
