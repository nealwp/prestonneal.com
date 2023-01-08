import axios from 'axios'
import { config } from '../config/app.config'

const url = config.apiUrl

const getSiteVisitCount = async (): Promise<number> => {
    return await axios.get(`${url}/v1/analytics/site-visits`)
        .then(res => {
            return res.data.siteVisits
        })
        .catch(err => {
            console.error(err)
        })
}

const logSiteVisit = async (): Promise<number> => {
    return await axios.post(`${url}/v1/analytics/site-visits`)
        .then(res => {
            return res.data.siteVisits
        })
        .catch(err => {
            console.error(err)
        })
}

export { getSiteVisitCount, logSiteVisit }