import { mainPage } from '../src/main-page'

describe('default test', () => {
    test('should pass', () => {
        expect(true).toBe(true)
    })
})

describe('main page', () => {

    beforeAll(async () => {
        const app = document.createElement('div')
        app.setAttribute('id', 'app')
        document.body.appendChild(app)
        await mainPage.render(document)
    })
    test('should have correct name', async () => {
        const nameElement = document.getElementById("name")
        expect(nameElement?.textContent).toEqual(mainPage.name)
    })
    test('should have correct title', () => {
        const titleElement = document.getElementById("title")
        expect(titleElement?.textContent).toEqual(mainPage.title)
    })
    test('should have correct version', () => {
        const versionElement = document.getElementById("version")
        expect(versionElement?.textContent).toEqual(mainPage.version)
    })
    test('should display site visit count', async () => {
        const siteVisitElement = document.getElementById("site-visits")
        expect(siteVisitElement).toBeTruthy()
    })
})