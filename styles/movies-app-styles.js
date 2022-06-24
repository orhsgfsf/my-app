import { DefaultStyles, Scale, ThemeConst } from '../theme'

export const MoviesAppStyles = {
    tabBarContainer: {
        borderBottomWidth: Scale(3),
        borderBottomColor: ThemeConst.Color.lightGrey1,
        backgroundColor: ThemeConst.Color.lightGrey3,
    },
    tabBarLabel: {
        ...DefaultStyles.fontMediumHalfSmallSemiBoldWithoutColor,
        textTransform: 'none',
    },
    tabBarIndicator: {
        borderColor:  ThemeConst.Color.darkNavyBlue2,
        borderBottomWidth: Scale(3),
        bottom: Scale(-3),
    },
}
