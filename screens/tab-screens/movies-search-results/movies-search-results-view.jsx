import _ from 'lodash'
import React from 'react'
// rn
import { View, Text, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
// styles
import { MoviesSearchResultsStyles } from '../../../styles'
// components
import { SearchBar, DropDownButton, SearchButton, BottomSheet, List, CategoryBlock, Loading } from '../../../components'

export const MoviesSearchResultsView = (props) => {
    
    const {
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
    } = props

    return (
        <>
            <BottomSheet
                bottomSheetRef={bottomSheetRef}
                renderComponent={
                    <View style={MoviesSearchResultsStyles.categoryBlockContainer}>
                        {
                            subCategories.map((subCategory, index) => {
                                return (
                                    <View key={`${t('general.searchResults')}--${index}`}>
                                        <CategoryBlock
                                            isSelected={subCategory === selectedSubCategory}
                                            categoryName={t(`searchResults.${subCategory}`)}
                                            onPress={() => onPressCategoryBlock(subCategory)}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View>
                }
            />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={MoviesSearchResultsStyles.upperContainer}>
                    <Text style={MoviesSearchResultsStyles.middleSizeTextContainer}>
                        <Text>{t('general.searchMovie')}</Text>
                        <Text style={MoviesSearchResultsStyles.starText}>*</Text>
                    </Text>
                    <SearchBar
                        ref={searchBarRef}
                        isNotYetFilled={hasError.searchBar}
                        searchBarRef={searchBarTextRef}
                        containerStyles={MoviesSearchResultsStyles.searchBarContainer}
                        placeholder={t('general.placeHolderSearchBar')}
                    />
                    <Text style={MoviesSearchResultsStyles.middleSizeTextContainer}>
                        <Text>{t('general.chooseSearchType')}</Text>
                        <Text style={MoviesSearchResultsStyles.starText}>*</Text>
                    </Text>
                    <View style={MoviesSearchResultsStyles.dropDownAndSearchButtonContainer}>
                        <View style={MoviesSearchResultsStyles.dropDownButtonContainerWrapper}>
                            <DropDownButton
                                isNotYetFilled={hasError.searchType}
                                categoryName={t(`searchResults.${selectedSubCategory}`)}
                                onPress={onPressDropDownButton}
                            />
                        </View>
                        <SearchButton
                            onPress={onPressSearch}
                        />
                    </View>
                    {
                        (hasError.searchBar || hasError.searchType)
                            ? <Text style={[MoviesSearchResultsStyles.smallSizeText, MoviesSearchResultsStyles.smallSizeTextError]}>
                                {
                                    hasError.searchBar
                                        ? t('error.showNameRequired')
                                        : t('error.searchTypeRequired')
                                }
                            </Text>
                            : <Text style={MoviesSearchResultsStyles.smallSizeText}>{t('general.pleaseSelectSearchType')}</Text>
                    }
                </View>
            </TouchableWithoutFeedback>
            {
                isLoading
                    ? <Loading />
                    : !_.isEmpty(data)
                        ? <View style={MoviesSearchResultsStyles.lowerContainer}>
                            <List
                                isRefreshing={isRefreshing}
                                category={confirmedSubCategory}
                                data={data}
                                onRefresh={onRefreshList}
                                onEndReached={() => hasNextPage ? onListEndReached() : null}
                                onPressMoreDetails={onPressMoreDetails}
                            />
                        </View>
                        : <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                            <View style={[
                                MoviesSearchResultsStyles.lowerContainerWithoutSearch,
                                Platform.OS === 'android'
                                    ? {}
                                    : MoviesSearchResultsStyles.absoluteLayer
                            ]}>
                                {
                                    isResultNotFound
                                        ? <View style={MoviesSearchResultsStyles.resultNotFoundTextContainer}>
                                            <Text style={MoviesSearchResultsStyles.BigSizeText}>{t('general.resultNotFound')}</Text>
                                            <Text style={MoviesSearchResultsStyles.BigSizeText}>{t('general.pleaseTryAnotherSearchTerm')}</Text>
                                        </View>
                                        : <Text style={MoviesSearchResultsStyles.BigSizeText}>{t('general.pleaseInitiateSearch')}</Text>
                                }
                            </View>
                        </TouchableWithoutFeedback>
            }
        </>
    )
}
