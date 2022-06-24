import _ from 'lodash'
import axios from 'axios'
// helpers
import { APIKey, APIHeaders, APIDomainHTTP, APIVersion, CamelCase } from '../helpers'
export const GetSearch = async (category, query, page) => {
    const { get } = axios
    const url = `${APIDomainHTTP()}/${APIVersion()}/search/${_.snakeCase(category)}`
    const headers = APIHeaders()
    try {
        const res = await get(url, {
            params: { 
                api_key: APIKey(),
                query,
                page,
             },
            headers,
        })
        if (res.status === 200) {
            const { data } = CamelCase(res)
            return { data }
        } else {
            throw new Error(res.statusText)
        }
    } catch (e) {
        throw new Error(e.message)
    }
}
