// styles
import { ScreenHeaderStyles } from '../styles'

export const ScreenHeader = ({ route }) => {

    const { name } = route

    const stackHeader = ({
        headerTitle,
        headerBackTitle = '',
        headerStyle = {},
        headerTitleStyle = {},
    }) => {
        return {
            headerTitle,
            headerBackTitle,
            headerStyle,
            headerTitleStyle,
        }
    }

    const MoviesApp = stackHeader({
        headerTitle: t('general.moviesApp'),
        headerStyle: ScreenHeaderStyles.moviesHomeContainer,
        headerTitleStyle: ScreenHeaderStyles.moviesHomeTitleText,
    })

    const MovieDetails = stackHeader({
        headerTitle: '...',
        headerBackTitle: t('general.backToList'),
    })

    const Component = {
        MoviesApp,
        MovieDetails,
    }

    return Component[name]
}
