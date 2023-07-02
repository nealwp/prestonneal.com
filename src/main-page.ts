import { version } from '../package.json'
import { logSiteVisit } from './services/analytics.service'

const mainPage = {
  name: 'Preston Neal',
  title: 'Software Engineer',
  version: version,

  render: async (document: Document) => {
    
    const visitCount = await logSiteVisit()    
    const app: HTMLElement = document.getElementById('app')!

    app.innerHTML = `
      <div class="m-auto text-center">
        <img src='/hedgehog-noborder.svg' height=300 width=200>
        <h1 id="name" class="p-1">${mainPage.name}</h1>
        <h2 id="title" class="p-1">${mainPage.title}</h2>
        <p class="text-sm gray">
          Version <span id="version">${mainPage.version}</span>
        <p>
        <p class="font-mono text-sm gray">
          Site Visits: <span id="site-visits">${visitCount ?? ''}</span>
        </p>
      </div>
    `
  }
}

export { mainPage }