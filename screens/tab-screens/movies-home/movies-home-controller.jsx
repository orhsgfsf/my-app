import _ from 'lodash'
import React, { useState, useEffect, useRef } from 'react'
// rn
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
// view
import { MoviesHomeView } from './movies-home-view'
// api
import { GetDiscover } from '../../../api'
// helpers
import { Dictionary } from '../../../helpers'

export const MoviesHomeController = () => {

    const navigation = useNavigation()
    const { name } = useRoute()
    const category = name.toLowerCase()

    const bottomSheetRef = useRef()
    const page = useRef(1)
    const [isLoading, setIsLoading] = useState(true)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [hasNextPage, setHasNextPage] = useState(false)
    const [selectedSubCategory, setSelectedSubCategory] = useState('')
    const [subCategories, setSubCategories] = useState([])
    const [data, setData] = useState([])

    const getDiscover = async () => {
        try {
            const { data: discover } = await GetDiscover(category, selectedSubCategory, page.current)
            setData(page.current === 1
                ? discover.results
                : [...data, ...discover.results]
            )
            if (page.current + 1 < discover.totalPages) {
                setHasNextPage(true)
                page.current = page.current + 1
            } else {
                setHasNextPage(false)
            }
        } catch (e) {
            setData([])
            Alert.alert('Error', e.message)
        } finally {
            if (isLoading) setIsLoading(false)
            if (isRefreshing) setIsRefreshing(false)
        }
    }

    useEffect(() => {
        setSubCategories(
            category === 'tv'
                ? Dictionary('subCategoryOptions').tv
                : Dictionary('subCategoryOptions').movie
        )
        setSelectedSubCategory(
            category === 'tv'
                ? Dictionary('subCategoryOptions').tv[0]
                : Dictionary('subCategoryOptions').movie[0]
        )
    }, [])

    useEffect(() => {
        if (isRefreshing) {
            page.current = 1
            getDiscover()
        }
    }, [isRefreshing])

    useEffect(() => {
        if (!_.isEmpty(selectedSubCategory)) {
            page.current = 1
            getDiscover()
        }
    }, [selectedSubCategory])

    const onPressDropDownButton = () => {
        bottomSheetRef.current?.open()
    }

    const onPressCategoryBlock = (subCategory) => {
        if (!_.isEqual(subCategory, selectedSubCategory)) {
            setSelectedSubCategory(subCategory)
            setIsLoading(true)
        }
        bottomSheetRef.current?.close()
    }

    const onPressMoreDetails = ({ id }) => {
        navigation.navigate('MovieDetails', {
            id,
            category,
        })
    }

    const onRefreshList = () => {
        setIsRefreshing(true)
    }

    const onListEndReached = () => {
        getDiscover()
    }

    const ViewProps = {
        isLoading,
        isRefreshing,
        hasNextPage,
        bottomSheetRef,
        category,
        selectedSubCategory,
        subCategories,
        data,
        onPressDropDownButton,
        onPressCategoryBlock,
        onPressMoreDetails,
        onRefreshList,
        onListEndReached,
    }

    return (
        <MoviesHomeView {...ViewProps} />
    )
}
