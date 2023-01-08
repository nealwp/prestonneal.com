interface AppConfig {
    [key: string]: {
        apiUrl: string
    }
}
const mode = process.env.NODE_ENV as string

const app: AppConfig = {
    test: {
        apiUrl: 'NO_URL'
    },
    development: {
        apiUrl: 'http://localhost:8081'
    },
    production: {
        apiUrl: 'https://api.prestonneal.com'
    }
}


const config = {
    apiUrl: app[mode].apiUrl 
}

export { config }