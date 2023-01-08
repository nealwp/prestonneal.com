import axios  from 'axios'

const apiBaseUrl = 'http://localhost:8081'

const getSiteVisitCount = async (): Promise<number> => {
    return await axios.get(`${apiBaseUrl}/v1/analytics/site-visits`)
        .then(res => {
            return res.data.siteVisits
        })
        .catch(err => {
            console.error(err)
        })
}

const logSiteVisit = async (): Promise<number> => {
    return await axios.post(`${apiBaseUrl}/v1/analytics/site-visits`)
        .then(res => {
            return res.data.siteVisits
        })
        .catch(err => {
            console.error(err)
        })
}

export { getSiteVisitCount, logSiteVisit }