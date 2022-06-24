import _ from 'lodash'
import React from 'react'
// rn
import { FlatList, RefreshControl, Platform } from 'react-native'
// components
import { ListItem } from './list-item'
// styles
import { ListStyles } from '../styles'
// helpers
import { Dictionary } from '../helpers'

export const List = (props) => {

    const {
        isRefreshing,
        category,
        data = [],
        onRefresh,
        onEndReached,
        onPressMoreDetails,
    } = props

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            extraData={data}
            keyExtractor={(_, index) => `${category}--${index}`}
            contentContainerStyle={ListStyles.contentContainer}
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                />
            }
            renderItem={({ item }) => {
                const resolvedCategory = category === 'multi' ? item.mediaType : category
                return (
                    <ListItem
                        dateText={
                            !_.isEmpty(item[Dictionary('date')[resolvedCategory]])
                                ? `${Dictionary('date')[resolvedCategory]}`
                                : ''
                        }
                        imagePath={
                            // Danny: I think those paths are 3 of the most common path to have, maybe there are other image paths from backend.
                            !_.isEmpty(item.backdropPath)
                                ? item.backdropPath
                                : !_.isEmpty(item.posterPath)
                                    ? item.posterPath
                                    : item.profilePath
                        }
                        title={
                            !_.isEmpty(item.name)
                                ? item.name
                                : item.title
                        }
                        popularity={item.popularity}
                        date={
                            !_.isEmpty(item[Dictionary('date')[resolvedCategory]])
                                ? item[Dictionary('date')[resolvedCategory]]
                                : ''
                        }
                        onPressMoreDetails={() => onPressMoreDetails(item)}
                    />
                )
            }}
            onEndReached={onEndReached}
            onEndReachedThreshold={Platform.OS === 'android' ? 0.2 : 0}
        />
    )
}
