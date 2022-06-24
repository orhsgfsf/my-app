import _ from 'lodash'

export const APIHeaders = async (additionalHeaderContents) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...additionalHeaderContents,
    }
    return headers
}
