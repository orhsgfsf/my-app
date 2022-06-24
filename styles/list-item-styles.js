import { Scale, DefaultStyles, ThemeConst } from '../theme'

export const ListItemStyles = {
    container: {
        ...DefaultStyles.rowLayout,
        paddingVertical: Scale(8),
    },
    imageContainer: {
        height: Scale(100),
        width: Scale(100),
    },
    detailContainer: {
        flex: 1,
        paddingHorizontal: Scale(12),
        paddingVertical: Scale(4),
    },
    buttonContainer: {
        ...DefaultStyles.rowLayoutWithAllCenter,
        flex: 1,
        borderRadius: Scale(4),
        backgroundColor: ThemeConst.Color.waterBlue1,
    },
    titleText: {
        ...DefaultStyles.fontMediumBold,
    },
    introText: {
        ...DefaultStyles.fontMedium,
    },
    buttonText: {
        ...DefaultStyles.fontMediumSemiBold,
        color: ThemeConst.Color.white,
    },
    alignSelfCenter: {
        ...DefaultStyles.alignSelfCenter,
    },
}
