const mainPage = {
  name: 'Preston Neal',
  title: 'Software Engineer',
  
  render: (document: Document) => {
    const app: HTMLElement = document.getElementById('app')!

    app.innerHTML = `
      <div class="m-auto text-center">
        <h1 id="name" class="p-1">${mainPage.name}</h1>
        <h2 id="title" class="p-1">${mainPage.title}</h2>
      </div>
    `
  }
}

export { mainPage }