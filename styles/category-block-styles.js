import { Scale, DefaultStyles, ThemeConst } from '../theme'

export const CategoryBlockStyles = {
    container: {
        marginHorizontal: Scale(8),
        borderRadius: Scale(8),
    },
    containerSelected: {
        backgroundColor: ThemeConst.Color.pinkGreen1,
    },
    innerContainer: {
        ...DefaultStyles.rowLayout,
        paddingHorizontal: Scale(16),
        paddingVertical: Scale(12),
        borderRadius: Scale(8),
    },
    iconCheckContainer: {
        marginHorizontal: Scale(8),
    },
    categoryNameText: {
        ...DefaultStyles.fontMediumSemiBold,
    },
    categoryNameTextSelected: {
        color: ThemeConst.Color.white,
    },
}