import './style.css'

const app: HTMLElement = document.getElementById('app')!

const name: string = 'Preston Neal'
const title: string = 'Software Engineer'

app.innerHTML = `
    <div class="m-auto text-center">
      <h1 class="p-1">${name}</h1>
      <h2 class="p-1">${title}</h2>
    </div>
`