import { Scale, DefaultStyles, ThemeConst } from '../theme'

export const SearchBarStyles = {
    container: {
        ...DefaultStyles.rowLayout,
        padding: Scale(10),
        backgroundColor: ThemeConst.Color.lightGrey1,
        borderWidth: Scale(2),
        borderRadius: Scale(8),
        borderColor: ThemeConst.Color.transparent,
    },
    containerFocused: {
        borderColor: ThemeConst.Color.waterBlue1,
    },
    containerError: {
        borderColor: ThemeConst.Color.red1,
    },
    text: {
        flex: 1,
        marginHorizontal: Scale(8),
    },
}