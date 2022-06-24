import { Scale, DefaultStyles, ThemeConst } from '../theme'

export const DropDownButtonStyles = {
    container: {
        ...DefaultStyles.rowLayoutWithSpaceBetween,
        paddingHorizontal: Scale(8),
        paddingVertical: Scale(8),
        borderWidth: Scale(1),
        borderRadius: Scale(4),
        borderColor: ThemeConst.Color.lightGrey1,
    },
    categoryNameText: {
        color: ThemeConst.Color.black1,
    },
    errorContainer: {
        borderColor: ThemeConst.Color.red1,
    },
}