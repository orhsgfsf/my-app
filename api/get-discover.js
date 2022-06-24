import _ from 'lodash'
import axios from 'axios'

// helpers
import { APIKey, APIHeaders, APIDomainHTTP, APIVersion, CamelCase } from '../helpers'
export const GetDiscover = async (category, subCategory, page) => {
    const { get } = axios
    const url = `${APIDomainHTTP()}/${APIVersion()}/${category}/${_.snakeCase(subCategory)}`
    const headers = APIHeaders()
    try {
        const res = await get(url, {
            params: { 
                api_key: APIKey(),
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
