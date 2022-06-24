import React from 'react'
// rn
import { View } from 'react-native'
// components
import { DropDownButton, List, BottomSheet, CategoryBlock, Loading } from '../../../components'
// styles
import { MoviesHomeStyles } from '../../../styles'

export const MoviesHomeView = (props) => {

    const {
        bottomSheetRef,
        isLoading,
        isRefreshing,
        hasNextPage,
        category,
        selectedSubCategory,
        subCategories,
        data,
        onPressDropDownButton,
        onPressCategoryBlock,
        onPressMoreDetails,
        onRefreshList,
        onListEndReached,
    } = props

    return (
        <>
            <BottomSheet
                bottomSheetRef={bottomSheetRef}
                renderComponent={
                    <View style={MoviesHomeStyles.categoryBlockContainer}>
                        {
                            subCategories.map((subCategory, index) => {
                                return (
                                    <View key={`${category}--${index}`}>
                                        <CategoryBlock
                                            isSelected={subCategory === selectedSubCategory}
                                            categoryName={t(`general.${subCategory}`)}
                                            onPress={() => onPressCategoryBlock(subCategory)}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View>
                }
            />
            <View style={MoviesHomeStyles.container}>
                <View style={MoviesHomeStyles.dropDownButtonContainer}>
                    <DropDownButton
                        categoryName={t(`general.${selectedSubCategory}`)}
                        onPress={onPressDropDownButton}
                    />
                </View>
                {
                    isLoading
                        ? <Loading />
                        : <List
                            isRefreshing={isRefreshing}
                            category={category}
                            data={data}
                            onRefresh={onRefreshList}
                            onEndReached={() => hasNextPage ? onListEndReached() : null}
                            onPressMoreDetails={onPressMoreDetails}
                        />
                }
            </View>
        </>
    )
}
