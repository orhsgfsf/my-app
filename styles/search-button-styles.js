import { Scale, DefaultStyles, ThemeConst } from '../theme'

export const SearchButtonStyles = {
    container: {
        marginHorizontal: Scale(8),
        borderRadius: Scale(8),
        backgroundColor: ThemeConst.Color.waterBlue1,
    },
    innerContainer: {
        ...DefaultStyles.rowLayoutWithSpaceBetween,
        paddingHorizontal: Scale(16),
        paddingVertical: Scale(12),
        borderRadius: Scale(8),
    },
    errorContainer: {
        borderColor: ThemeConst.Color.red1,
    },
    searchText: {
        marginLeft: Scale(8),
        color: ThemeConst.Color.white,
    }
}
