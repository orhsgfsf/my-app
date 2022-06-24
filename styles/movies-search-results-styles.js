import { Scale, DefaultStyles, ThemeConst } from '../theme'

export const MoviesSearchResultsStyles = {
    upperContainer: {
        paddingLeft: Scale(36),
        paddingRight: Scale(16),
        paddingVertical: Scale(24),
    },
    middleSizeTextContainer: {
        paddingBottom: Scale(8),
    },
    smallSizeText: {
        ...DefaultStyles.fontSmall,
        color: ThemeConst.Color.grey1,
    },
    BigSizeText: {
        ...DefaultStyles.fontBigBold,
        color: ThemeConst.Color.black1,
    },
    searchBarContainer: {
        marginRight: Scale(20),
    },
    starText: {
        color: ThemeConst.Color.red1,
    },
    dropDownAndSearchButtonContainer: {
        ...DefaultStyles.rowLayoutWithAllCenter,
    },
    dropDownButtonContainerWrapper: {
        flex: 1,
    },
    categoryBlockContainer: {
        paddingBottom: Scale(40),
    },
    absoluteLayer: {
        ...DefaultStyles.absoluteLayout,
    },
    lowerContainerWithoutSearch: {
        ...DefaultStyles.rowLayoutWithAllCenter,
        marginHorizontal: Scale(12),
        zIndex: -1,
    },
    lowerContainer: {
        flex: 1,
        marginHorizontal: Scale(12),
    },
    smallSizeTextError: {
        color: ThemeConst.Color.red1,
    },
    resultNotFoundTextContainer: {
        ...DefaultStyles.columnLayoutWithAlignItemsCenter,
    },
}