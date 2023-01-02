import { buildMainPage } from '../src/main'

describe('default test', () => {
    test('should pass', () => {
        expect(true).toBe(true)
    })
})

describe('main page', () => {

    test('should have my name', async () => {
        document.body.innerHTML = `<div id="app" class="flex flex-col h-max"></div>`;
        const expectedHTML =
        '<div id="app" class="flex flex-col h-max">' +
        '   <div class="m-auto text-center">' +
        '       <h1 id="name" class="p-1">Preston Neal</h1>' +
        '       <h2 id="title" class="p-1">Software Engineer</h2>' +
        '   </div>' +
        '</div>'
        await buildMainPage(document)
        expect(document.body.innerHTML).toEqual(expectedHTML)
    })
    test('should have my title', () => {
        const titleElement = document.getElementById("title")
        expect(titleElement?.innerText).toEqual('Software Engineer')
    })
})