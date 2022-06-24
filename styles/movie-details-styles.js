import { Scale, DefaultStyles } from '../theme'

export const MovieDetailsStyles = {
    loadingContainer: {
        ...DefaultStyles.columnLayoutWithJustifyContentCenter,
        flex: 1,
    },
    container: {
        padding: Scale(32)
    },
    imageContainer: {
        ...DefaultStyles.alignSelfCenter,
        margin: Scale(32),
        height: Scale(232),
        width: Scale(220),
    },
    titleText: {
        ...DefaultStyles.textAlignCenter,
        ...DefaultStyles.fontBigBold,
        marginTop: Scale(12),
        marginBottom: Scale(16),
    },
    overviewText: {
        ...DefaultStyles.fontMediumSmall,
        lineHeight: Scale(20),
    },
    popularityAndDateContainer: {
        ...DefaultStyles.rowLayout,
        marginVertical: Scale(32),
    },
    popularityAndDateText: {
        ...DefaultStyles.fontMediumSmallSemiBold,
        ...DefaultStyles.textAlignCenter,
    },
    alignSelfCenter: {
        ...DefaultStyles.alignSelfCenter,
    },
}