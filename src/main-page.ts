import { version } from '../package.json'

const mainPage = {
  name: 'Preston Neal',
  title: 'Software Engineer',
  version: version,

  render: (document: Document) => {
    const app: HTMLElement = document.getElementById('app')!

    app.innerHTML = `
      <div class="m-auto text-center">
        <img src='/hedgehog-noborder.svg' height=300 width=200>
        <h1 id="name" class="p-1">${mainPage.name}</h1>
        <h2 id="title" class="p-1">${mainPage.title}</h2>
        <p class="text-sm gray">Version <span id="version">${mainPage.version}</span><p>
      </div>
    `
  }
}

export { mainPage }