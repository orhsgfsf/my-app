import camelCaseKeys from 'camelcase-keys'

export const CamelCase = (body) => {
    return camelCaseKeys(body, { deep: true })
}
