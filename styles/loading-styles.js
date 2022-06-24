import { Scale, DefaultStyles } from '../theme'

export const LoadingStyles = {
    container: {
        ...DefaultStyles.rowLayoutWithAllCenter,
    },
    detailsContainer: {
        ...DefaultStyles.columnLayoutWithAlignItemsCenter,
    },
    loadingText: {
        ...DefaultStyles.fontMediumBold,
        marginHorizontal: Scale(16),
    },
    loadingDetailsText: {
        ...DefaultStyles.fontBigBold,
    },
    loadingDetailsIndicatorContainer: {
        marginTop: Scale(16),
        marginBottom: Scale(48),
    },
}
