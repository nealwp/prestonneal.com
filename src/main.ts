const buildMainPage = async (document: Document) => {
  const name: string = 'Preston Neal'
  const title: string = 'Software Engineer'
  const app: HTMLElement = document.getElementById('app')!

  app.innerHTML = `
    <div class="m-auto text-center">
      <h1 id="name" class="p-1">${name}</h1>
      <h2 id="title" class="p-1">${title}</h2>
    </div>
  `
}
export { buildMainPage }