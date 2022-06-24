import _ from 'lodash'
import React, { useState, useRef, useEffect } from 'react'
// rn
import { Alert, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// view
import { MoviesSearchResultsView } from './movies-search-results-view'
// api
import { GetSearch } from '../../../api'
// helpers
import { Dictionary } from '../../../helpers'

export const MoviesSearchResultsController = () => {

    const navigation = useNavigation()

    const bottomSheetRef = useRef()
    const searchBarTextRef = useRef()
    const searchBarRef = useRef()
    const page = useRef(1)
    const [subCategories] = useState(Dictionary('searchTypes'))
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [isResultNotFound, setIsResultNotFound] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)
    const [hasError, setHasError] = useState({ searchBar: false, searchType: false })
    const [selectedSubCategory, setSelectedSubCategory] = useState('')
    const [confirmedSubCategory, setConfirmedSubCategory] = useState('')
    const [data, setData] = useState([])
    const [keywords, setKeywords] = useState('')

    const getSearch = async () => {
        try {
            const { data: searchedData } = await GetSearch(confirmedSubCategory, keywords, page.current)
            const { results = [], totalPages } = searchedData
            setData(
                page.current === 1
                    ? results
                    : [...data, ...results]
            )
            setHasNextPage(page.current + 1 < totalPages)
            if (page.current + 1 < totalPages) {
                page.current = page.current + 1
            }
            setIsResultNotFound(_.isEmpty(results))
        } catch (e) {
            setData([])
            Alert.alert('Error', e.message)
        } finally {
            if (isLoading) setIsLoading(false)
            if (isRefreshing) setIsRefreshing(false)
        }
    }

    useEffect(() => {
        if ((isLoading && !_.isEmpty(keywords)) || isRefreshing) {
            page.current = 1
            getSearch()
        }
    }, [isRefreshing, isLoading])

    const onPressDropDownButton = () => {
        Keyboard.dismiss()
        bottomSheetRef.current?.open()
    }

    const onPressCategoryBlock = (subCategory) => {
        if (!_.isEqual(subCategory, selectedSubCategory)) {
            setSelectedSubCategory(subCategory)
        }
        bottomSheetRef.current?.close()
    }

    const onPressSearch = () => {
        const value = searchBarRef.current?.onGetTextValue()
        if (!_.isEmpty(value) && _.isEqual(keywords, value) && _.isEqual(selectedSubCategory, confirmedSubCategory)) return
        searchBarTextRef.current?.blur()
        setHasError({
            searchBar: _.isEmpty(value.trim()),
            searchType: _.isEmpty(selectedSubCategory),
        })
        if (!_.isEmpty(value.trim()) && !_.isEmpty(selectedSubCategory)) {
            setKeywords(value)
            setConfirmedSubCategory(selectedSubCategory)
            setIsLoading(true)
        }
    }

    const onPressMoreDetails = ({ id, mediaType = undefined }) => {
        navigation.navigate('MovieDetails', {
            id,
            category: confirmedSubCategory === 'multi' ? mediaType : confirmedSubCategory,
        })
    }

    const onRefreshList = () => {
        setIsRefreshing(true)
    }

    const onListEndReached = () => {
        getSearch()
    }

    const ViewProps = {
        bottomSheetRef,
        searchBarRef,
        searchBarTextRef,
        hasNextPage,
        hasError,
        isRefreshing,
        isResultNotFound,
        isLoading,
        selectedSubCategory,
        confirmedSubCategory,
        subCategories,
        data,
        onPressDropDownButton,
        onPressCategoryBlock,
        onPressSearch,
        onPressMoreDetails,
        onRefreshList,
        onListEndReached,
    }

    return (
        <MoviesSearchResultsView {...ViewProps} />
    )
}
